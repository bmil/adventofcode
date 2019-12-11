import Operation from "./Operation";

export default class MultiplyOperation implements Operation {

    execute(firstParam: number, secondParam: number): number {

        return firstParam * secondParam;
    }
}