"use strict";

// @ts-ignore
var server = require("server");
// @ts-ignore
server.extend(module.superModule);
var csrfProtection = require("*/cartridge/scripts/middleware/csrf");
var TransactionHelperImport = require("~/cartridge/scripts/wallee/helpers/Transaction");
server.prepend("SubmitPayment", server.middleware.https, csrfProtection.validateAjaxRequest, function (req, res, next) {
    var data = res.getViewData();
    if (data && data.csrfError) {
        res.json();
        // @ts-ignore
        this.emit("route:Complete", req, res);
        return;
    }
    var billingForm = server.forms.getForm("billing");
    var paymentMethodID = "WALLEE";
    var paymenrMethodRegex = /_handler(\d+)/gi;
    var AccountModel = require("*/cartridge/models/account");
    var OrderModel = require("*/cartridge/models/order");
    var COHelpers = require("*/cartridge/scripts/checkout/checkoutHelpers");
    var currentBasket = dw.order.BasketMgr.getCurrentBasket();
    if (billingForm.paymentMethod.value !== paymentMethodID) {
        return next();
    }
    if (empty(req.form.WALLEE_handler) || (req.form.WALLEE_handler.match(paymenrMethodRegex) === null)) {
        res.json({
            handler: {
                handler: req.form.WALLEE_handler,
                regex: req.form.WALLEE_handler.match(paymenrMethodRegex),
            },
            form: billingForm,
            fieldErrors: [],
            serverErrors: [],
            error: true,
        });
        // @ts-ignore
        this.emit("route:Complete", req, res);
        return;
    }
    if (!currentBasket) {
        res.json({
            error: true,
            cartError: true,
            fieldErrors: [],
            serverErrors: [],
            redirectUrl: dw.web.URLUtils.url("Cart-Show").toString(),
        });
        // @ts-ignore
        this.emit("route:Complete", req, res);
        return;
    }
    var viewData = {};
    // @ts-ignore
    viewData.paymentMethod = {
        value: paymentMethodID,
        htmlName: billingForm.paymentMethod.htmlName,
    };
    var billingFormErrors = COHelpers.validateBillingForm(billingForm.addressFields);
    var contactInfoFormErrors = COHelpers.validateFields(billingForm.contactInfoFields);
    if (Object.keys(billingFormErrors).length || Object.keys(contactInfoFormErrors).length) {
        res.json({
            form: billingForm,
            fieldErrors: [billingFormErrors, contactInfoFormErrors],
            serverErrors: [],
            error: true,
            paymentMethod: viewData.paymentMethod,
        });
        // @ts-ignore
        this.emit("route:Complete", req, res);
        return;
    }
    // @ts-ignore
    viewData.address = {
        firstName: {
            value: billingForm.addressFields.firstName.value,
        },
        lastName: {
            value: billingForm.addressFields.lastName.value,
        },
        address1: {
            value: billingForm.addressFields.address1.value,
        },
        address2: {
            value: billingForm.addressFields.address2.value,
        },
        city: {
            value: billingForm.addressFields.city.value,
        },
        postalCode: {
            value: billingForm.addressFields.postalCode.value,
        },
        countryCode: {
            value: billingForm.addressFields.country.value,
        },
    };
    if (Object.prototype.hasOwnProperty.call(billingForm.addressFields, "states")) {
        // @ts-ignore
        viewData.address.stateCode = {
            value: billingForm.addressFields.states.stateCode.value,
        };
    }
    var email = billingForm.contactInfoFields.email.value;
    // @ts-ignore
    viewData.email = {
        value: email,
    };
    res.setViewData(viewData);
    var billingAddress = currentBasket.billingAddress;
    dw.system.Transaction.wrap(function () {
        if (!billingAddress) {
            billingAddress = currentBasket.createBillingAddress();
        }
        billingAddress.setFirstName(billingForm.addressFields.firstName.value);
        billingAddress.setLastName(billingForm.addressFields.lastName.value);
        billingAddress.setAddress1(billingForm.addressFields.address1.value);
        billingAddress.setAddress2(billingForm.addressFields.address2.value);
        billingAddress.setCity(billingForm.addressFields.city.value);
        billingAddress.setPostalCode(billingForm.addressFields.postalCode.value);
        billingAddress.setCountryCode(billingForm.addressFields.country.value);
        if (Object.prototype.hasOwnProperty.call(billingForm.addressFields, "states")) {
            billingAddress.setStateCode(billingForm.addressFields.states.stateCode.value);
        }
        // @ts-ignore
        currentBasket.setCustomerEmail(email);
    });
    dw.system.Transaction.wrap(function () {
        dw.system.HookMgr.callHook("dw.order.calculate", "calculate", currentBasket);
    });
    var paymentMethod = dw.order.PaymentMgr.getPaymentMethod(paymentMethodID);
    var processor = paymentMethod.getPaymentProcessor();
    if (!processor) {
        throw new Error(dw.web.Resource.msg("error.payment.processor.missing", "checkout", null));
    }
    var processorResult = null;
    if (dw.system.HookMgr.hasHook("app.payment.processor." + processor.ID.toLowerCase())) {
        processorResult = dw.system.HookMgr.callHook("app.payment.processor." + processor.ID.toLowerCase(), "Handle", currentBasket);
    }
    else {
        throw new Error("hooks/payment/processor/wallee.js file is missing or \"app.payment.processor.wallee\" hook is wrong set");
    }
    if (processorResult.error) {
        res.json({
            form: billingForm,
            fieldErrors: [],
            serverErrors: [],
            error: true,
        });
        // @ts-ignore
        this.emit("route:Complete", req, res);
        return;
    }
    var usingMultiShipping = false; // Current integration support only single shipping
    req.session.privacyCache.set("usingMultiShipping", usingMultiShipping);
    var currentLocale = dw.util.Locale.getLocale(req.locale.id);
    var basketModel = new OrderModel(currentBasket, {
        usingMultiShipping: usingMultiShipping,
        countryCode: currentLocale.country,
        containerView: "basket",
    });
    var accountModel = new AccountModel(req.currentCustomer);
    // The hack for MFRA renders right data in function updatePaymentInformation(order). TODO need to find better solution
    basketModel.resources.cardType = "";
    basketModel.resources.cardEnding = "";
    basketModel.billing.payment.selectedPaymentInstruments[0].type = "";
    basketModel.billing.payment.selectedPaymentInstruments[0].maskedCreditCardNumber = "";
    basketModel.billing.payment.selectedPaymentInstruments[0].expirationMonth = req.form.WALLEE_handler_name + " ";
    basketModel.billing.payment.selectedPaymentInstruments[0].expirationYear = " " + dw.util.StringUtils.formatMoney(new dw.value.Money(basketModel.billing.payment.selectedPaymentInstruments[0].amount, currentBasket.getCurrencyCode()));
    // End the hack
    res.json({
        renderedPaymentInstruments: COHelpers.getRenderedPaymentInstruments(req, accountModel),
        customer: accountModel,
        order: basketModel,
        session: session.custom,
        processorResult: processorResult,
        form: billingForm,
        error: false,
    });
    // @ts-ignore
    this.emit("route:Complete", req, res);
});
server.append("PlaceOrder", function (req, res, next) {
    var viewData = res.getViewData();
    if (!(empty(viewData.orderID) || empty(viewData.orderToken))) {
        var order_1 = dw.order.OrderMgr.getOrder(viewData.orderID);
        if (order_1 && order_1.getInvoiceNo()) {
            var orderPaymentInstrument = order_1.getPaymentInstruments().toArray();
            var paymentProcessorID = "WALLEE";
            if (orderPaymentInstrument &&
                (orderPaymentInstrument.length === 1) &&
                orderPaymentInstrument[0].getPaymentTransaction().getPaymentProcessor().ID &&
                (orderPaymentInstrument[0].getPaymentTransaction().getPaymentProcessor().ID === paymentProcessorID)) {
                var TransactionHelper_1 = new TransactionHelperImport();
                dw.system.Transaction.wrap(function () {
                    order_1.setExternalOrderNo(TransactionHelper_1.getId());
                });
                TransactionHelper_1.setMetaData(viewData);
                TransactionHelper_1.destroyId();
                req.session.raw.custom.orderID = null;
            }
        }
    }
    res.json(viewData);
    return next();
});
module.exports = server.exports();
