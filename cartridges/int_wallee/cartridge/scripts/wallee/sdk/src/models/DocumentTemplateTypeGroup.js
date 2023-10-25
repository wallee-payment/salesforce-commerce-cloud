"use strict";

exports.DocumentTemplateTypeGroup = void 0;
var DocumentTemplateTypeGroup = /** @class */ (function () {
    function DocumentTemplateTypeGroup() {
    }
    DocumentTemplateTypeGroup.getAttributeTypeMap = function () {
        return DocumentTemplateTypeGroup.attributeTypeMap;
    };
    DocumentTemplateTypeGroup.discriminator = undefined;
    DocumentTemplateTypeGroup.attributeTypeMap = [
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
    return DocumentTemplateTypeGroup;
}());
exports.DocumentTemplateTypeGroup = DocumentTemplateTypeGroup;
module.exports = DocumentTemplateTypeGroup;
