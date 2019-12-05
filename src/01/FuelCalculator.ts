import Module from "./Module";

export default class FuelCalculator {

    calculate(modules: Module[]): number {

        return modules.reduce((prev: number, next: Module) => {
            return prev + Math.floor(next.mass / 3) - 2;
        }, 0);
    }
}