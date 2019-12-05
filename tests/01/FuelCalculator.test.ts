import FuelCalculator from "../../src/01/FuelCalculator";

describe.each([
    [12, 2],
    [14, 2],
    [1969, 654],
    [100756, 33583]
])('fuelCalculator#calculate()', (mass, expected) => {
    test(`should calculate result`, () => {
        const fuelCalculator = new FuelCalculator();
        let result = fuelCalculator.calculate([{mass}]);
        expect(result).toBe(expected);
    });
});