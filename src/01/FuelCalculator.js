"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FuelCalculator = /** @class */ (function () {
    function FuelCalculator() {
    }
    // --- Part One ---
    // calculate(modules: Module[]): number {
    //
    //     return modules.reduce((prev: number, next: Module) => {
    //         return prev + Math.floor(next.mass / 3) - 2;
    //     }, 0);
    // }
    // --- Part Two ---
    FuelCalculator.prototype.calculate = function (modules) {
        var _this = this;
        var fuelMass = modules.reduce(function (fuel, module) {
            return fuel + _this.calculateAdditionalFuel(module.mass);
        }, 0);
        return fuelMass;
    };
    FuelCalculator.prototype.calculateAdditionalFuel = function (fuelMass) {
        var fuelRequirement = this.fuelRequirement(fuelMass);
        if (fuelRequirement <= 0)
            return 0;
        return this.fuelRequirement(fuelMass) + this.calculateAdditionalFuel(fuelRequirement);
    };
    FuelCalculator.prototype.fuelRequirement = function (mass) {
        return Math.floor(mass / 3) - 2;
    };
    return FuelCalculator;
}());
exports.default = FuelCalculator;
