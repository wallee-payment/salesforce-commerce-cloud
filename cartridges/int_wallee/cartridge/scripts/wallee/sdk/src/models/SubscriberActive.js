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

exports.SubscriberActive = void 0;
var SubscriberUpdate = require("./SubscriberUpdate");
var SubscriberActive = /** @class */ (function (_super) {
    __extends(SubscriberActive, _super);
    function SubscriberActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriberActive.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriberActive.attributeTypeMap);
    };
    SubscriberActive.discriminator = undefined;
    SubscriberActive.attributeTypeMap = [
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        }
    ];
    return SubscriberActive;
}(SubscriberUpdate));
exports.SubscriberActive = SubscriberActive;
module.exports = SubscriberActive;
