"use strict";

var LegalOrganizationForm = /** @class */ (function () {
    function LegalOrganizationForm() {
    }
    LegalOrganizationForm.getAttributeTypeMap = function () {
        return LegalOrganizationForm.attributeTypeMap;
    };
    LegalOrganizationForm.discriminator = undefined;
    LegalOrganizationForm.attributeTypeMap = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "Array<LocalizedString>"
        },
        {
            "name": "englishDescription",
            "baseName": "englishDescription",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "shortcut",
            "baseName": "shortcut",
            "type": "Array<LocalizedString>"
        }
    ];
    return LegalOrganizationForm;
}());
exports.LegalOrganizationForm = LegalOrganizationForm;
module.exports = LegalOrganizationForm;
