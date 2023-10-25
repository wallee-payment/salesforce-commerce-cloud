"use strict";

exports.PaymentAppConnector = void 0;
var PaymentAppConnector = /** @class */ (function () {
    function PaymentAppConnector() {
    }
    PaymentAppConnector.getAttributeTypeMap = function () {
        return PaymentAppConnector.attributeTypeMap;
    };
    PaymentAppConnector.discriminator = undefined;
    PaymentAppConnector.attributeTypeMap = [
        {
            "name": "authorizationTimeout",
            "baseName": "authorizationTimeout",
            "type": "string"
        },
        {
            "name": "completionConfiguration",
            "baseName": "completionConfiguration",
            "type": "PaymentAppCompletionConfiguration"
        },
        {
            "name": "connectorConfiguration",
            "baseName": "connectorConfiguration",
            "type": "PaymentConnectorConfiguration"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "paymentPageEndpoint",
            "baseName": "paymentPageEndpoint",
            "type": "string"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "PaymentAppProcessor"
        },
        {
            "name": "refundConfiguration",
            "baseName": "refundConfiguration",
            "type": "PaymentAppRefundConfiguration"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "PaymentAppConnectorState"
        },
        {
            "name": "updatedOn",
            "baseName": "updatedOn",
            "type": "Date"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return PaymentAppConnector;
}());
exports.PaymentAppConnector = PaymentAppConnector;
module.exports = PaymentAppConnector;
