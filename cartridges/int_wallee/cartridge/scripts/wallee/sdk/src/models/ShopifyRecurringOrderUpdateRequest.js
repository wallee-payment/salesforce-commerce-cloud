"use strict";

var ShopifyRecurringOrderUpdateRequest = /** @class */ (function () {
    function ShopifyRecurringOrderUpdateRequest() {
    }
    ShopifyRecurringOrderUpdateRequest.getAttributeTypeMap = function () {
        return ShopifyRecurringOrderUpdateRequest.attributeTypeMap;
    };
    ShopifyRecurringOrderUpdateRequest.discriminator = undefined;
    ShopifyRecurringOrderUpdateRequest.attributeTypeMap = [
        {
            "name": "executionDate",
            "baseName": "executionDate",
            "type": "Date"
        },
        {
            "name": "recurringOrderId",
            "baseName": "recurringOrderId",
            "type": "number"
        }
    ];
    return ShopifyRecurringOrderUpdateRequest;
}());
exports.ShopifyRecurringOrderUpdateRequest = ShopifyRecurringOrderUpdateRequest;
module.exports = ShopifyRecurringOrderUpdateRequest;
