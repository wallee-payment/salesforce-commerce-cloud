"use strict";

var RenderedTerminalReceipt = /** @class */ (function () {
    function RenderedTerminalReceipt() {
    }
    RenderedTerminalReceipt.getAttributeTypeMap = function () {
        return RenderedTerminalReceipt.attributeTypeMap;
    };
    RenderedTerminalReceipt.discriminator = undefined;
    RenderedTerminalReceipt.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string"
        }
    ];
    return RenderedTerminalReceipt;
}());
exports.RenderedTerminalReceipt = RenderedTerminalReceipt;
module.exports = RenderedTerminalReceipt;
