"use strict";

var PaymentConnector = /** @class */ (function () {
    function PaymentConnector() {
    }
    PaymentConnector.getAttributeTypeMap = function () {
        return PaymentConnector.attributeTypeMap;
    };
    PaymentConnector.discriminator = undefined;
    PaymentConnector.attributeTypeMap = [
        {
            "name": "dataCollectionType",
            "baseName": "dataCollectionType",
            "type": "DataCollectionType"
        },
        {
            "name": "deprecated",
            "baseName": "deprecated",
            "type": "boolean"
        },
        {
            "name": "deprecationReason",
            "baseName": "deprecationReason",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "Feature"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "number"
        },
        {
            "name": "paymentMethodBrand",
            "baseName": "paymentMethodBrand",
            "type": "PaymentMethodBrand"
        },
        {
            "name": "primaryRiskTaker",
            "baseName": "primaryRiskTaker",
            "type": "PaymentPrimaryRiskTaker"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "number"
        },
        {
            "name": "supportedCustomersPresences",
            "baseName": "supportedCustomersPresences",
            "type": "Array<CustomersPresence>"
        },
        {
            "name": "supportedFeatures",
            "baseName": "supportedFeatures",
            "type": "Array<number>"
        }
    ];
    return PaymentConnector;
}());
exports.PaymentConnector = PaymentConnector;
module.exports = PaymentConnector;
