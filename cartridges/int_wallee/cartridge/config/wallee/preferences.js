"use strict";

function getPreferences() {
    try {
        var customPreferences = dw.object.CustomObjectMgr.getCustomObject("Wallee_Common", "wallee_common");
        var prefs = {
            spaceId: customPreferences.custom.spaceId,
            serviceName: "int_wallee.http.rest.payment.wallee",
            macVersion: 1,
            userId: customPreferences.custom.userId,
            apiSecret: customPreferences.custom.apiSecret,
        };
        return prefs;
    }
    catch (e) {
        var errorMessage = "Site \"" + dw.system.Site.getCurrent().getName() + "\" is not configured. You must update settings in BM > Merchant Tools > Site Preferences > Wallee";
        dw.system.Logger.error(errorMessage);
        throw new Error(errorMessage + " : " + JSON.stringify({
            message: e.message,
            fileName: e.fileName,
            lineNumber: e.lineNumber
        }));
    }
}
exports.getPreferences = getPreferences;
module.exports = getPreferences();
