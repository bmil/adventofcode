"use strict";
exports.__esModule = true;
var FuelCalculator = /** @class */ (function () {
    function FuelCalculator() {
    }
    FuelCalculator.prototype.calculate = function (modules) {
        return modules.reduce(function (prev, next) {
            return prev + Math.floor(next.mass / 3) - 2;
        }, 0);
    };
    return FuelCalculator;
}());
exports["default"] = FuelCalculator;
