"use strict";

var DocumentTemplateType = /** @class */ (function () {
    function DocumentTemplateType() {
    }
    DocumentTemplateType.getAttributeTypeMap = function () {
        return DocumentTemplateType.attributeTypeMap;
    };
    DocumentTemplateType.discriminator = undefined;
    DocumentTemplateType.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "number"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "DocumentTemplateTypeGroup"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "{ [key: string]: string; }"
        }
    ];
    return DocumentTemplateType;
}());
exports.DocumentTemplateType = DocumentTemplateType;
module.exports = DocumentTemplateType;
