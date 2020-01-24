"use strict";

var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    Transaction.getAttributeTypeMap = function () {
        return Transaction.attributeTypeMap;
    };
    Transaction.discriminator = undefined;
    Transaction.attributeTypeMap = [
        {
            "name": "acceptHeader",
            "baseName": "acceptHeader",
            "type": "string"
        },
        {
            "name": "acceptLanguageHeader",
            "baseName": "acceptLanguageHeader",
            "type": "string"
        },
        {
            "name": "allowedPaymentMethodBrands",
            "baseName": "allowedPaymentMethodBrands",
            "type": "Array<PaymentMethodBrand>"
        },
        {
            "name": "allowedPaymentMethodConfigurations",
            "baseName": "allowedPaymentMethodConfigurations",
            "type": "Array<number>"
        },
        {
            "name": "authorizationAmount",
            "baseName": "authorizationAmount",
            "type": "number"
        },
        {
            "name": "authorizationEnvironment",
            "baseName": "authorizationEnvironment",
            "type": "ChargeAttemptEnvironment"
        },
        {
            "name": "authorizationTimeoutOn",
            "baseName": "authorizationTimeoutOn",
            "type": "Date"
        },
        {
            "name": "authorizedOn",
            "baseName": "authorizedOn",
            "type": "Date"
        },
        {
            "name": "autoConfirmationEnabled",
            "baseName": "autoConfirmationEnabled",
            "type": "boolean"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "chargeRetryEnabled",
            "baseName": "chargeRetryEnabled",
            "type": "boolean"
        },
        {
            "name": "completedAmount",
            "baseName": "completedAmount",
            "type": "number"
        },
        {
            "name": "completedOn",
            "baseName": "completedOn",
            "type": "Date"
        },
        {
            "name": "completionTimeoutOn",
            "baseName": "completionTimeoutOn",
            "type": "Date"
        },
        {
            "name": "confirmedBy",
            "baseName": "confirmedBy",
            "type": "number"
        },
        {
            "name": "confirmedOn",
            "baseName": "confirmedOn",
            "type": "Date"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "customerEmailAddress",
            "baseName": "customerEmailAddress",
            "type": "string"
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "string"
        },
        {
            "name": "customersPresence",
            "baseName": "customersPresence",
            "type": "CustomersPresence"
        },
        {
            "name": "deliveryDecisionMadeOn",
            "baseName": "deliveryDecisionMadeOn",
            "type": "Date"
        },
        {
            "name": "deviceSessionIdentifier",
            "baseName": "deviceSessionIdentifier",
            "type": "string"
        },
        {
            "name": "endOfLife",
            "baseName": "endOfLife",
            "type": "Date"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "Environment"
        },
        {
            "name": "environmentSelectionStrategy",
            "baseName": "environmentSelectionStrategy",
            "type": "TransactionEnvironmentSelectionStrategy"
        },
        {
            "name": "failedOn",
            "baseName": "failedOn",
            "type": "Date"
        },
        {
            "name": "failedUrl",
            "baseName": "failedUrl",
            "type": "string"
        },
        {
            "name": "failureReason",
            "baseName": "failureReason",
            "type": "FailureReason"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "TransactionGroup"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "internetProtocolAddress",
            "baseName": "internetProtocolAddress",
            "type": "string"
        },
        {
            "name": "internetProtocolAddressCountry",
            "baseName": "internetProtocolAddressCountry",
            "type": "string"
        },
        {
            "name": "invoiceMerchantReference",
            "baseName": "invoiceMerchantReference",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "number"
        },
        {
            "name": "paymentConnectorConfiguration",
            "baseName": "paymentConnectorConfiguration",
            "type": "PaymentConnectorConfiguration"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "processingOn",
            "baseName": "processingOn",
            "type": "Date"
        },
        {
            "name": "refundedAmount",
            "baseName": "refundedAmount",
            "type": "number"
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "Address"
        },
        {
            "name": "shippingMethod",
            "baseName": "shippingMethod",
            "type": "string"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "TransactionState"
        },
        {
            "name": "successUrl",
            "baseName": "successUrl",
            "type": "string"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "Token"
        },
        {
            "name": "tokenizationMode",
            "baseName": "tokenizationMode",
            "type": "TokenizationMode"
        },
        {
            "name": "userAgentHeader",
            "baseName": "userAgentHeader",
            "type": "string"
        },
        {
            "name": "userFailureMessage",
            "baseName": "userFailureMessage",
            "type": "string"
        },
        {
            "name": "userInterfaceType",
            "baseName": "userInterfaceType",
            "type": "TransactionUserInterfaceType"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Transaction;
}());
exports.Transaction = Transaction;
module.exports = Transaction;
