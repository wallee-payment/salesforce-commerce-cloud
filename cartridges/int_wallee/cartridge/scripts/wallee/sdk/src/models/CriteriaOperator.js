"use strict";

var CriteriaOperator;
(function (CriteriaOperator) {
    CriteriaOperator["CONTAINS"] = "CONTAINS";
    CriteriaOperator["EQUALS"] = "EQUALS";
    CriteriaOperator["EQUALS_IGNORE_CASE"] = "EQUALS_IGNORE_CASE";
    CriteriaOperator["GREATER_THAN"] = "GREATER_THAN";
    CriteriaOperator["GREATER_THAN_OR_EQUAL"] = "GREATER_THAN_OR_EQUAL";
    CriteriaOperator["LESS_THAN"] = "LESS_THAN";
    CriteriaOperator["LESS_THAN_OR_EQUAL"] = "LESS_THAN_OR_EQUAL";
    CriteriaOperator["NOT_EQUALS"] = "NOT_EQUALS";
    CriteriaOperator["NOT_EQUALS_IGNORE_CASE"] = "NOT_EQUALS_IGNORE_CASE";
    CriteriaOperator["NOT_CONTAINS"] = "NOT_CONTAINS";
    CriteriaOperator["IS_NULL"] = "IS_NULL";
    CriteriaOperator["IS_NOT_NULL"] = "IS_NOT_NULL";
})(CriteriaOperator = exports.CriteriaOperator || (exports.CriteriaOperator = {}));
module.exports = CriteriaOperator;
