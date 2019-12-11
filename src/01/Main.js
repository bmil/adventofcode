"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModulesProvider_1 = require("./ModulesProvider");
var FuelCalculator_1 = require("./FuelCalculator");
var modulesProvider = new ModulesProvider_1.default();
var fuelCalculator = new FuelCalculator_1.default();
var fuelRequirement = fuelCalculator.calculate(modulesProvider.get());
console.log(fuelRequirement);
