import {Opcode} from "./Opcode";
import Memory from "./Memory";
import Operation from "./Operation";
import AddOperation from "./AddOperation";
import MultiplyOperation from "./MultiplyOperation";

export default class IntcodeProcessor {

    private readonly memory: Memory;

    constructor(memory: Memory) {

        this.memory = memory;
    }

    process(intcode: number[]): number[] {

        this.memory.init(intcode);

        for (let pointer = 0; pointer < this.memory.size; pointer += 4) {

            const opcode = this.memory.get(pointer);

            if (opcode === Opcode.HALT) return this.memory.data;

            this.processInstruction(pointer, opcode);
        }
    }

    private processInstruction(pointer: number, opcode: number) {

        const firstParamAddress = this.memory.get(pointer + 1);
        const secondParamAddress = this.memory.get(pointer + 2);
        const outputAddress = this.memory.get(pointer + 3);

        const operation = this.getOperation(opcode);

        const firstParam = this.memory.get(firstParamAddress);
        const secondParam = this.memory.get(secondParamAddress);

        const output = operation.execute(firstParam, secondParam);

        this.memory.set(outputAddress, output);
    }

    private getOperation(opcode: number) {

        if (opcode === Opcode.ADD) {
            return new AddOperation();
        }

        if (opcode === Opcode.MULTIPLY) {
            return new MultiplyOperation();
        }
    }
}