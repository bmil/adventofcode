"use strict";
exports.__esModule = true;
var FuelCalculator = /** @class */ (function () {
    function FuelCalculator() {
    }
    FuelCalculator.prototype.calculate = function (modules) {
        return modules.reduce(function (prev, next) {
            return prev + 1;
        }, 0);
    };
    return FuelCalculator;
}());
exports["default"] = FuelCalculator;
