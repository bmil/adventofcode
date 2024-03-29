import FuelCalculator from "../../src/01/FuelCalculator";

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
])('fuelCalculator#calculate()', (mass, expected) => {
    test(`should calculate result`, () => {
        const fuelCalculator = new FuelCalculator();
        let result = fuelCalculator.calculate([{mass}]);
        expect(result).toBe(expected);
    });
});
