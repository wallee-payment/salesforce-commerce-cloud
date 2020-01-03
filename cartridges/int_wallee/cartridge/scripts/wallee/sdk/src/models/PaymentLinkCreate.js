"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AbstractPaymentLinkUpdate = require("./AbstractPaymentLinkUpdate");
var PaymentLinkCreate = /** @class */ (function (_super) {
    __extends(PaymentLinkCreate, _super);
    function PaymentLinkCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentLinkCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(PaymentLinkCreate.attributeTypeMap);
    };
    PaymentLinkCreate.discriminator = undefined;
    PaymentLinkCreate.attributeTypeMap = [
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "protectionMode",
            "baseName": "protectionMode",
            "type": "PaymentLinkProtectionMode"
        }
    ];
    return PaymentLinkCreate;
}(AbstractPaymentLinkUpdate));
exports.PaymentLinkCreate = PaymentLinkCreate;
module.exports = PaymentLinkCreate;
