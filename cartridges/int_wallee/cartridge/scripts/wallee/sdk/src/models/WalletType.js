"use strict";

exports.WalletType = void 0;
var WalletType = /** @class */ (function () {
    function WalletType() {
    }
    WalletType.getAttributeTypeMap = function () {
        return WalletType.attributeTypeMap;
    };
    WalletType.discriminator = undefined;
    WalletType.attributeTypeMap = [
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
            "name": "navigationPath",
            "baseName": "navigationPath",
            "type": "string"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        }
    ];
    return WalletType;
}());
exports.WalletType = WalletType;
module.exports = WalletType;
