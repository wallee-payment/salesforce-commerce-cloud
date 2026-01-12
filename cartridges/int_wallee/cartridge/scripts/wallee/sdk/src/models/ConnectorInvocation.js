"use strict";

exports.ConnectorInvocation = void 0;
var ConnectorInvocation = /** @class */ (function () {
    function ConnectorInvocation() {
    }
    ConnectorInvocation.getAttributeTypeMap = function () {
        return ConnectorInvocation.attributeTypeMap;
    };
    ConnectorInvocation.discriminator = undefined;
    ConnectorInvocation.attributeTypeMap = [
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
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
}());
exports.ConnectorInvocation = ConnectorInvocation;
module.exports = ConnectorInvocation;
