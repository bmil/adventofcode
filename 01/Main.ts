import ModulesProvider from "./ModulesProvider";
import FuelCalculator from "./FuelCalculator";

const modulesProvider = new ModulesProvider();
const fuelCalculator = new FuelCalculator();

const fuelRequirement = fuelCalculator.calculate(modulesProvider.get());

console.log(fuelRequirement);