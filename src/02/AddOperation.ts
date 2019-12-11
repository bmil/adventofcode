import Operation from "./Operation";

export default class AddOperation implements Operation {

    execute(firstParam: number, secondParam: number): number {

        return firstParam + secondParam;
    }
}