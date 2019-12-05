import Module from "./Module";
import data from './data';

export default class ModulesProvider {

    createModule(mass: number): Module {
        return {
            mass: mass
        };
    }

    get(): Module[] {

        return data.map(this.createModule);
    }
}


