"use strict";

var server = require("server");
// @ts-ignore
server.extend(module.superModule);
var TransactionHelperImport = require("~/cartridge/scripts/wallee/helpers/Transaction");
server.append("Begin", function (req, res, next) {
    var currentBasket = dw.order.BasketMgr.getCurrentBasket();
    if (!currentBasket) {
        return next();
    }
    var transactionHelper = new TransactionHelperImport(currentBasket);
    var viewData = res.getViewData();
    viewData.wallee = transactionHelper.handleTransaction();
    res.setViewData(viewData);
    return next();
});
module.exports = server.exports();
