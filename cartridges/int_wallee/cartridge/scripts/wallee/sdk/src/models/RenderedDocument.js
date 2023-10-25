"use strict";

exports.RenderedDocument = void 0;
var RenderedDocument = /** @class */ (function () {
    function RenderedDocument() {
    }
    RenderedDocument.getAttributeTypeMap = function () {
        return RenderedDocument.attributeTypeMap;
    };
    RenderedDocument.discriminator = undefined;
    RenderedDocument.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        },
        {
            "name": "documentTemplateType",
            "baseName": "documentTemplateType",
            "type": "number"
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }
    ];
    return RenderedDocument;
}());
exports.RenderedDocument = RenderedDocument;
module.exports = RenderedDocument;
