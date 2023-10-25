"use strict";

exports.RenderedTerminalReceipt = void 0;
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
        },
        {
            "name": "printed",
            "baseName": "printed",
            "type": "boolean"
        },
        {
            "name": "receiptType",
            "baseName": "receiptType",
            "type": "PaymentTerminalReceiptType"
        }
    ];
    return RenderedTerminalReceipt;
}());
exports.RenderedTerminalReceipt = RenderedTerminalReceipt;
module.exports = RenderedTerminalReceipt;
