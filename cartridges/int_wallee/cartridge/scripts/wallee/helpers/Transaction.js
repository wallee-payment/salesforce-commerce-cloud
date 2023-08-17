"use strict";
/* global dw empty session */

var Wallee = require("~/cartridge/scripts/wallee/sdk/index");
/**
 * Transaction Helper
 */
var Transaction = /** @class */ (function () {
    /**
     * Constructor
     * @param { dw.order.Basket | dw.order.LineItemCtnr } currentBasket
     */
    function Transaction(currentBasket) {
        this.UtilityHelper = new (require("~/cartridge/scripts/wallee/helpers/Utility"));
        this.spaceId = this.UtilityHelper.getConfigs().spaceId;
        this.ApiClient = new (require("~/cartridge/scripts/wallee/helpers/ApiClient"));
        this.PaymentMethodConfigurationService = new Wallee.api.PaymentMethodConfigurationService(this.ApiClient);
        this.TransactionIframeService = new Wallee.api.TransactionIframeService(this.ApiClient);
        this.TransactionService = new Wallee.api.TransactionService(this.ApiClient);
        this.currentBasket = currentBasket;
    }
    /**
     * Get a list of lineItems from Basket
     *
     * @return { Wallee.model.Transaction }
     */
    Transaction.prototype.getLineItemsFromBasket = function () {
        var data = Array();
        var shippingLineItem = new Wallee.model.LineItemCreate();
        shippingLineItem.name = Wallee.model.LineItemType.SHIPPING;
        shippingLineItem.uniqueId = Wallee.model.LineItemType.SHIPPING + "-" + dw.util.UUIDUtils.createUUID();
        shippingLineItem.sku = Wallee.model.LineItemType.SHIPPING;
        shippingLineItem.quantity = 1;
        shippingLineItem.taxes = this.getShippingTax();
        shippingLineItem.amountIncludingTax = (this.currentBasket.shippingTotalPrice.getValue() + this.currentBasket.shippingTotalTax.getValue()).toFixed(2);
        shippingLineItem.type = Wallee.model.LineItemType.SHIPPING;
        data.push(shippingLineItem);
        var productLineItems = this.currentBasket.getAllProductLineItems().iterator();
        while (productLineItems.hasNext()) {
            var lineItem = new Wallee.model.LineItemCreate();
            var productLineItem = productLineItems.next();
            lineItem.name = productLineItem.productName;
            lineItem.uniqueId = productLineItem.productID + "-" + dw.util.UUIDUtils.createUUID();
            lineItem.sku = productLineItem.manufacturerSKU;
            lineItem.quantity = productLineItem.quantityValue;
            lineItem.taxes = this.getLineItemTax(productLineItem);
            lineItem.amountIncludingTax = (productLineItem.getPriceValue() + productLineItem.adjustedTax.getValue()).toFixed(2);
            lineItem.type = Wallee.model.LineItemType.PRODUCT;
            data.push(lineItem);
        }
        return data;
    };
    Transaction.prototype.getShippingTax = function () {
        var taxArray = [];
        var totalPrice = this.currentBasket.shippingTotalPrice.getValue() + this.currentBasket.shippingTotalTax.getValue();
        var taxRate = (this.currentBasket.shippingTotalTax.getValue() / totalPrice).toFixed(2);
        var tax = new Wallee.model.TaxCreate();
        tax.rate = parseFloat(taxRate) * 100;
        tax.title = 'ShippingTax';
        taxArray.push(tax);
        return taxArray;
    };
    /**
     * Get tax
     * @param productLineItem
     */
    Transaction.prototype.getLineItemTax = function (productLineItem) {
        var taxArray = [];
        var tax = new Wallee.model.TaxCreate();
        tax.rate = productLineItem.getTaxRate() * 100;
        tax.title = productLineItem.getTaxClassID() ? productLineItem.getTaxClassID() : 'LineItemTax';
        taxArray.push(tax);
        return taxArray;
    };
    /**
     * Get billing address
     *
     * @returns { Wallee.model.Address }
     */
    Transaction.prototype.getBillingAddress = function () {
        var address;
        if (this.currentBasket.billingAddress) {
            address = new Wallee.model.Address();
            address.city = this.currentBasket.billingAddress.getCity();
            address.country = this.currentBasket.billingAddress.getCountryCode().getValue();
            address.familyName = this.currentBasket.billingAddress.getLastName();
            address.givenName = this.currentBasket.billingAddress.getFirstName();
            address.postcode = this.currentBasket.billingAddress.getPostalCode();
            address.postalState = this.currentBasket.billingAddress.getStateCode();
            address.phoneNumber = this.currentBasket.billingAddress.getPhone();
            address.street = this.currentBasket.billingAddress.getAddress1();
            return address;
        }
        return undefined;
    };
    /**
     * Get shipping address
     *
     * @returns { Wallee.model.Address }
     */
    Transaction.prototype.getShippingAddress = function () {
        var address;
        if (this.currentBasket.defaultShipment.shippingAddress !== null) {
            address = new Wallee.model.Address();
            address.city = this.currentBasket.defaultShipment.shippingAddress.getCity();
            address.country = this.currentBasket.defaultShipment.shippingAddress.getCountryCode().getValue();
            address.familyName = this.currentBasket.defaultShipment.shippingAddress.getLastName();
            address.givenName = this.currentBasket.defaultShipment.shippingAddress.getFirstName();
            address.postcode = this.currentBasket.defaultShipment.shippingAddress.getPostalCode();
            address.postalState = this.currentBasket.defaultShipment.shippingAddress.getStateCode();
            address.phoneNumber = this.currentBasket.defaultShipment.shippingAddress.getPhone();
            address.street = this.currentBasket.defaultShipment.shippingAddress.getAddress1();
            return address;
        }
        return undefined;
    };
    /**
     * Get or create a transaction from the session Basket
     *
     * @return { Wallee.model.Transaction }
     */
    Transaction.prototype.createUpdateTransaction = function () {
        var transactionCreate;
        var transactionLineItems = this.getLineItemsFromBasket();
        var billingAddress = this.getBillingAddress();
        var shippingAddress = this.getShippingAddress();
        // Transaction and Basket exist, edit existing transaction
        if (this.isOldSession()) {
            var transaction = this.getTransactionById(this.spaceId, session.custom.WalleeTransactionId);
            transaction.lineItems = transactionLineItems;
            transaction.billingAddress = empty(billingAddress) ? shippingAddress : billingAddress;
            transaction.shippingAddress = shippingAddress;
            transactionCreate = this.TransactionService.update(this.spaceId, transaction);
        }
        else {
            var transaction = new Wallee.model.TransactionCreate();
            transaction.lineItems = transactionLineItems;
            transaction.currency = this.currentBasket.getCurrencyCode();
            transaction.billingAddress = empty(billingAddress) ? shippingAddress : billingAddress;
            transaction.shippingAddress = shippingAddress;
            transaction.autoConfirmationEnabled = true;
            transactionCreate = this.TransactionService.create(this.spaceId, transaction);
            session.custom.WalleeTransactionId = transactionCreate.id;
            session.custom.WalleeBasketId = this.currentBasket.getUUID();
        }
        return transactionCreate;
    };
    /**
     * Check if the custom is still using the same basket in the current session
     * @return { boolean }
     */
    Transaction.prototype.isOldSession = function () {
        return (!empty(this.getId()) &&
            !empty(session.custom.WalleeBasketId) &&
            (session.custom.WalleeBasketId === this.currentBasket.getUUID()));
    };
    /**
     * Get session transaction ID
     */
    Transaction.prototype.getId = function () {
        if (!empty(session.custom.WalleeTransactionId) &&
            (session.custom.WalleeTransactionId !== "undefined")) {
            return session.custom.WalleeTransactionId;
        }
        return null;
    };
    /**
     * Destroy session transaction ID
     */
    Transaction.prototype.destroyId = function () {
        session.custom.WalleeTransactionId = null;
    };
    /**
     * Update billing address
     *
     * @param { dw.order.Basket } currentBasket
     * @param { any } billingAddress
     * @return { {possiblePaymentMethodsArray: Array<number>; javascriptUrl: string; transactionPossiblePaymentMethods: Array<PaymentMethodConfiguration> } || { error: boolean; errorMessage: string }}
     */
    Transaction.prototype.updateBillingAddress = function (billingAddress) {
        var address;
        address = new Wallee.model.Address();
        address.city = billingAddress.addressFields.city.value;
        address.country = billingAddress.addressFields.country.value;
        address.familyName = billingAddress.addressFields.lastName.value;
        address.givenName = billingAddress.addressFields.firstName.value;
        address.postcode = billingAddress.addressFields.postalCode.value;
        address.street = billingAddress.addressFields.address1.value;
        if (Object.prototype.hasOwnProperty.call(billingAddress.addressFields, "states")) {
            address.postalState = billingAddress.addressFields.states.stateCode.value;
        }
        if (this.isOldSession()) {
            var transaction = this.getTransactionById(this.spaceId, session.custom.WalleeTransactionId);
            transaction.billingAddress = address;
            var transactionUpdate = this.TransactionService.update(this.spaceId, transaction);
            return this.getPaymentVariableData(transactionUpdate);
        }
        return {
            error: true,
            errorMessage: "Could not find existing transaction to edit"
        };
    };
    /**
     * Update shipping address
     *
     * @param { any } shippingAddress
     * @return { {possiblePaymentMethodsArray: Array<number>; javascriptUrl: string; transactionPossiblePaymentMethods: Array<PaymentMethodConfiguration> } || { error: boolean; errorMessage: string }}
     */
    Transaction.prototype.updateShippingAddress = function (shippingAddress) {
        var address;
        address = new Wallee.model.Address();
        address.city = shippingAddress.addressFields.city.value;
        address.country = shippingAddress.addressFields.country.value;
        address.familyName = shippingAddress.addressFields.lastName.value;
        address.givenName = shippingAddress.addressFields.firstName.value;
        address.postcode = shippingAddress.addressFields.postalCode.value;
        address.street = shippingAddress.addressFields.address1.value;
        if (Object.prototype.hasOwnProperty.call(shippingAddress.addressFields, "states")) {
            address.postalState = shippingAddress.addressFields.states.stateCode.value;
        }
        // Transaction and Basket exist, edit existing transaction.
        if (this.isOldSession()) {
            var transaction = this.getTransactionById(this.spaceId, session.custom.WalleeTransactionId);
            transaction.shippingAddress = address;
            transaction.billingAddress = address;
            var transactionUpdate = this.TransactionService.update(this.spaceId, transaction);
            return this.getPaymentVariableData(transactionUpdate);
        }
        return {
            error: true,
            errorMessage: "Could not find existing transaction to edit"
        };
    };
    /**
     * Lazy check if any of the mandatory addressFields have a value
     *
     * @param { any } addressFields
     * @return { boolean }
     */
    Transaction.prototype.ajaxAddressValid = function (addressFields) {
        var isValid = false;
        Object.keys(addressFields).forEach(function (key) {
            if (addressFields[key] && addressFields[key].mandatory && addressFields[key].htmlValue) {
                isValid = true;
            }
        });
        return isValid;
    };
    /**
     * Set Transaction Data
     * @param data
     */
    Transaction.prototype.setMetaData = function (data) {
        var transaction = this.getTransactionById(this.spaceId, session.custom.WalleeTransactionId);
        transaction.metaData = data;
        transaction.successUrl = dw.web.URLUtils.abs("Order-WalleeConfirm", "ID", data.orderID, "token", data.orderToken).toString();
        transaction.failedUrl = transaction.successUrl;
        transaction.merchantReference = data.orderID;
        this.TransactionService.update(this.spaceId, transaction);
    };
    /**
     * Handle current basket
     *
     * @returns { {possiblePaymentMethodsArray: Array<number>; javascriptUrl: string; transactionPossiblePaymentMethods: Array<PaymentMethodConfiguration> } }
     */
    Transaction.prototype.handleTransaction = function () {
        var transaction = this.createUpdateTransaction();
        var data = this.getPaymentVariableData(transaction);
        var entityQuery = new Wallee.model.EntityQuery();
        entityQuery.numberOfEntities = 100;
        data.transactionPossiblePaymentMethods = this.PaymentMethodConfigurationService.search(this.spaceId, entityQuery);
        data.javascriptUrl = this.TransactionIframeService.javascriptUrl(this.spaceId, transaction.id);
        return data;
    };
    /**
     * Get payment variable data
     *
     * @param { Wallee.model.Transaction } transaction
     * @returns { {possiblePaymentMethodsArray: Array<number>; javascriptUrl: string; transactionPossiblePaymentMethods: Array<Wallee.model.PaymentMethodConfiguration>} }
     */
    Transaction.prototype.getPaymentVariableData = function (transaction) {
        var transactionPossiblePaymentMethods = this.TransactionService.fetchPaymentMethods(this.spaceId, transaction.id, 'iframe');
        var possiblePaymentMethodsArray = Array();
        transactionPossiblePaymentMethods.forEach(function (transactionPossiblePaymentMethod) {
            possiblePaymentMethodsArray.push(transactionPossiblePaymentMethod.id);
        });
        return {
            javascriptUrl: "",
            possiblePaymentMethodsArray: possiblePaymentMethodsArray,
            transactionPossiblePaymentMethods: Array()
        };
    };
    /**
     * Get WebHook Listener
     * TODO This should be called only once in a shop
     * @return { Wallee.model.WebhookListener }
     */
    Transaction.prototype.getWebHook = function () {
        var WebHookHelper = new (require("~/cartridge/scripts/wallee/helpers/WebHook"));
        WebHookHelper.getTransactionListener();
        WebHookHelper.getRefundListener();
    };
    /**
     * Get Wallee.model.Transaction by id
     *
     * @param { number } spaceId
     * @param { number } transactionId
     * @return { Wallee.model.Transaction }
     */
    Transaction.prototype.getTransactionById = function (spaceId, transactionId) {
        return this.TransactionService.read(spaceId, transactionId);
    };
    return Transaction;
}());
exports.Transaction = Transaction;
module.exports = Transaction;
