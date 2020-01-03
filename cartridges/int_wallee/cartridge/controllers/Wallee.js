"use strict";
/* global dw empty this */

var server = require("server");
var TransactionHelperImport = require("~/cartridge/scripts/wallee/helpers/Transaction");
var Wallee = require("~/cartridge/scripts/wallee/sdk/index");
/**
 * Ajax update
 */
server.post("TransactionUpdate", server.middleware.https, function (req, res, next) {
    var currentBasket = dw.order.BasketMgr.getCurrentBasket();
    if (!currentBasket) {
        next();
        return;
    }
    var TransactionHelper = new TransactionHelperImport(currentBasket);
    var viewData = res.getViewData();
    var COHelpers = require("*/cartridge/scripts/checkout/checkoutHelpers");
    var billingAddress = server.forms.getForm("billing");
    var shippingAddress = server.forms.getForm("shipping");
    var shippingFormErrors = COHelpers.validateShippingForm(shippingAddress.shippingAddress.addressFields);
    var billingFormErrors = COHelpers.validateBillingForm(billingAddress.addressFields);
    if ((Object.keys(shippingFormErrors).length < 1) && TransactionHelper.ajaxAddressValid(shippingAddress.shippingAddress.addressFields)) {
        viewData.wallee = TransactionHelper.updateShippingAddress(shippingAddress.shippingAddress);
    }
    if ((Object.keys(billingFormErrors).length < 1) && TransactionHelper.ajaxAddressValid(billingAddress.addressFields)) {
        viewData.wallee = TransactionHelper.updateBillingAddress(billingAddress);
    }
    res.json(viewData);
    // @ts-ignore
    this.emit("route:Complete", req, res);
});
/**
 * WebHook Transaction callback
 */
server.post("WebHookTransaction", server.middleware.https, function (req, res, next) {
    var viewData = res.getViewData();
    var callBack = JSON.parse(req.body);
    var statusCode = 200;
    var TransactionHelper = new TransactionHelperImport(null);
    switch (callBack.listenerEntityTechnicalName) {
        case "Transaction":
            var transaction_1 = TransactionHelper.getTransactionById(callBack.spaceId, callBack.entityId);
            viewData.transaction = transaction_1;
            // @ts-ignore
            var orderID = transaction_1.metaData.orderID;
            if (!empty(orderID)) {
                var order_1 = dw.order.OrderMgr.getOrder(orderID);
                var orderStatus = order_1.getPaymentStatus().getValue();
                statusCode = 200;
                if (order_1) {
                    // @ts-ignore
                    if ([dw.order.Order.PAYMENT_STATUS_NOTPAID, dw.order.Order.PAYMENT_STATUS_PARTPAID].indexOf(orderStatus) !== -1) {
                        switch (transaction_1.state) {
                            case Wallee.model.TransactionState.FULFILL:
                                dw.system.Transaction.wrap(function () {
                                    order_1.setExternalOrderStatus(transaction_1.state);
                                    order_1.setPaymentStatus(dw.order.Order.PAYMENT_STATUS_PAID);
                                });
                                if (order_1.getInvoices().size() && order_1.getPaymentInstruments().size() === 1) {
                                    var invoice = order_1.getInvoice(order_1.getInvoiceNo());
                                    var orderPaymentInstruments = order_1.getPaymentInstruments().toArray();
                                    if (orderPaymentInstruments[0].getPaymentMethod() === 'WALLEE') {
                                        invoice.addCaptureTransaction(orderPaymentInstruments[0], new dw.value.Money(transaction_1.authorizationAmount, transaction_1.currency));
                                    }
                                }
                                break;
                            case Wallee.model.TransactionState.DECLINE:
                            case Wallee.model.TransactionState.VOIDED:
                            case Wallee.model.TransactionState.FAILED:
                                dw.system.Transaction.wrap(function () {
                                    order_1.setExternalOrderStatus(transaction_1.state);
                                    order_1.setPaymentStatus(dw.order.Order.PAYMENT_STATUS_NOTPAID);
                                    order_1.setStatus(dw.order.Order.ORDER_STATUS_CANCELLED);
                                });
                                break;
                        }
                    }
                    else {
                        statusCode = 202;
                    }
                }
                else {
                    statusCode = 404;
                }
            }
            break;
        default:
            statusCode = 400;
            viewData.errorMessage = "Unsupported Listener Entity Technical Name";
            break;
    }
    viewData.callBack = callBack;
    res.json(viewData);
    res.setStatusCode(statusCode);
    // @ts-ignore
    this.emit("route:Complete", req, res);
});
/**
 * WebHook Refund callback
 */
server.post("WebHookRefund", server.middleware.https, function (req, res, next) {
    var viewData = res.getViewData();
    var callBack = JSON.parse(req.body);
    var statusCode = 200;
    var TransactionHelper = new TransactionHelperImport(null);
    if ("Refund" === callBack.listenerEntityTechnicalName) {
        var transaction = TransactionHelper.getTransactionById(callBack.spaceId, callBack.entityId);
        viewData.transaction = transaction;
        // @ts-ignore
        var orderID = transaction.metaData.orderID;
        if (!empty(orderID)) {
            var order = dw.order.OrderMgr.getOrder(orderID);
            var orderStatus = order.getPaymentStatus().getValue();
            statusCode = 200;
            if (order) {
                // @ts-ignore
                if ([dw.order.Order.PAYMENT_STATUS_PAID].indexOf(orderStatus) !== -1) {
                    if (transaction.state === Wallee.model.TransactionState.FULFILL) {
                        if (order.getInvoices().size() && order.getPaymentInstruments().size() === 1) {
                            var invoice = order.getInvoice(order.getInvoiceNo());
                            var orderPaymentInstruments = order.getPaymentInstruments().toArray();
                            if (orderPaymentInstruments[0].getPaymentMethod() === 'WALLEE') {
                                invoice.addRefundTransaction(orderPaymentInstruments[0], new dw.value.Money(transaction.authorizationAmount, transaction.currency));
                            }
                        }
                    }
                }
            }
        }
    }
    viewData.callBack = callBack;
    res.json(viewData);
    res.setStatusCode(statusCode);
    // @ts-ignore
    this.emit("route:Complete", req, res);
});
server.get("WebHookTest", server.middleware.https, function (req, res, next) {
    var orderId = "00003401";
    var order = dw.order.OrderMgr.getOrder(orderId);
    var viewData = res.getViewData();
    viewData.invoiceNo = order.getInvoiceNo();
    viewData.invoice = order.getInvoice(order.getInvoiceNo());
    res.json(viewData);
    // @ts-ignore
    this.emit("route:Complete", req, res);
});
module.exports = server.exports();
