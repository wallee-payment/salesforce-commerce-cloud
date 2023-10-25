"use strict";

exports.SalesChannel = void 0;
var SalesChannel = /** @class */ (function () {
    function SalesChannel() {
    }
    SalesChannel.getAttributeTypeMap = function () {
        return SalesChannel.attributeTypeMap;
    };
    SalesChannel.discriminator = undefined;
    SalesChannel.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string"
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
            "name": "parent",
            "baseName": "parent",
            "type": "SalesChannel"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        }
    ];
    return SalesChannel;
}());
exports.SalesChannel = SalesChannel;
module.exports = SalesChannel;
