"use strict";

function getPreferences() {
    var site = dw.system.Site.getCurrent();
    var prefs = {
        spaceId: 0,
        serviceName: "int_wallee.http.nvp.payment.wallee.SiteGenesis",
        macVersion: 1,
        userId: 0,
        apiSecret: "",
    };
    prefs.spaceId = site.getCustomPreferenceValue("wallee_api_spaceId");
    prefs.userId = site.getCustomPreferenceValue("wallee_api_userId");
    prefs.apiSecret = site.getCustomPreferenceValue("wallee_api_apiSecret");
    if ((empty(prefs.spaceId) || prefs.spaceId <= 0) ||
        (empty(prefs.userId) || prefs.userId <= 0) ||
        empty(prefs.apiSecret)) {
        dw.system.Logger.error("Site \"" + site.getName() + "\" is not configured. Need to create the service in BM > Merchant Tools > Site Preferences > Custom Preferences > wallee");
    }
    return prefs;
}
exports.getPreferences = getPreferences;
module.exports = getPreferences();
