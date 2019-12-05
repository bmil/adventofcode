"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var ModulesProvider = /** @class */ (function () {
    function ModulesProvider() {
    }
    ModulesProvider.prototype.createModule = function (mass) {
        return {
            mass: mass
        };
    };
    ModulesProvider.prototype.get = function () {
        return data_1["default"].map(this.createModule);
    };
    return ModulesProvider;
}());
exports["default"] = ModulesProvider;
