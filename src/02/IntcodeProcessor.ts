import {Opcode} from "./Opcode";

export default class IntcodeProcessor {

    private memory: number[];

    process(intcode: number[]): number[] {

        this.memory = [...intcode];

        for (let pointer = 0; pointer < this.memory.length; pointer += 4) {

            const opcode = this.memory[pointer];

            if (opcode === Opcode.HALT) return this.memory;

            this.processInstruction(pointer, opcode);
        }
    }

    private processInstruction(pointer: number, opcode: number) {

        const {firstParamAddress, secondParamAddress, outputAddress} = this.getParamsAddresses(pointer);

        if (opcode === Opcode.ADD) {

            this.memory[outputAddress] = this.memory[firstParamAddress] + this.memory[secondParamAddress];
        }

        if (opcode === Opcode.MULTIPLY) {

            this.memory[outputAddress] = this.memory[firstParamAddress] * this.memory[secondParamAddress];
        }
    }

    private getParamsAddresses(i: number) {

        return {
            firstParamAddress: this.memory[i + 1],
            secondParamAddress: this.memory[i + 2],
            outputAddress: this.memory[i + 3]
        };
    }
}