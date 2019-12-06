import Module from "./Module";

export default class FuelCalculator {

    // --- Part One ---
    // calculate(modules: Module[]): number {
    //
    //     return modules.reduce((prev: number, next: Module) => {
    //         return prev + Math.floor(next.mass / 3) - 2;
    //     }, 0);
    // }

    // --- Part Two ---
    calculate(modules: Module[]): number {

        const fuelMass = modules.reduce((fuel: number, module: Module) => {
            return fuel + this.calculateAdditionalFuel(module.mass);
        }, 0);

        return fuelMass;
    }

    private calculateAdditionalFuel(fuelMass: number) {
        const fuelRequirement: number = this.fuelRequirement(fuelMass);

        if (fuelRequirement <= 0) return 0;

        return this.fuelRequirement(fuelMass) + this.calculateAdditionalFuel(fuelRequirement);
    }

    private fuelRequirement(mass: number) {
        return Math.floor(mass / 3) - 2;
    }
}