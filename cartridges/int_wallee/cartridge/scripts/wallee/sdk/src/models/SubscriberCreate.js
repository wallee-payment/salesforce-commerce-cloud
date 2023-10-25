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

exports.SubscriberCreate = void 0;
var AbstractSubscriberUpdate = require("./AbstractSubscriberUpdate");
var SubscriberCreate = /** @class */ (function (_super) {
    __extends(SubscriberCreate, _super);
    function SubscriberCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriberCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriberCreate.attributeTypeMap);
    };
    SubscriberCreate.discriminator = undefined;
    SubscriberCreate.attributeTypeMap = [
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        }
    ];
    return SubscriberCreate;
}(AbstractSubscriberUpdate));
exports.SubscriberCreate = SubscriberCreate;
module.exports = SubscriberCreate;
