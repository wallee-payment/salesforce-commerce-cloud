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

exports.ConnectorInvocation = void 0;
var TransactionAwareEntity = require("./TransactionAwareEntity");
var ConnectorInvocation = /** @class */ (function (_super) {
    __extends(ConnectorInvocation, _super);
    function ConnectorInvocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorInvocation.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ConnectorInvocation.attributeTypeMap);
    };
    ConnectorInvocation.discriminator = undefined;
    ConnectorInvocation.attributeTypeMap = [
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "stage",
            "baseName": "stage",
            "type": "ConnectorInvocationStage"
        },
        {
            "name": "timeTookInMilliseconds",
            "baseName": "timeTookInMilliseconds",
            "type": "number"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ConnectorInvocation;
}(TransactionAwareEntity));
exports.ConnectorInvocation = ConnectorInvocation;
module.exports = ConnectorInvocation;
