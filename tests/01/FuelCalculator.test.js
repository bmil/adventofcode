"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FuelCalculator_1 = require("../../src/01/FuelCalculator");
// --- Part One ---
// describe.each([
//     [12, 2],
//     [14, 2],
//     [1969, 654],
//     [100756, 33583]
// ])('fuelCalculator#calculate()', (mass, expected) => {
//     test(`should calculate result`, () => {
//         const fuelCalculator = new FuelCalculator();
//         let result = fuelCalculator.calculate([{mass}]);
//         expect(result).toBe(expected);
//     });
// });
// --- Part Two ---
describe.each([
    [1969, 966],
    [100756, 50346]
])('fuelCalculator#calculate()', function (mass, expected) {
    test("should calculate result", function () {
        var fuelCalculator = new FuelCalculator_1.default();
        var result = fuelCalculator.calculate([{ mass: mass }]);
        expect(result).toBe(expected);
    });
});
