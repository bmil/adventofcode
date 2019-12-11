export default class Memory {

    private memory: number[];

    init(intcode: number[]) {

        this.memory = [...intcode];
    }

    get(address: number): number {

        return this.memory[address];
    }

    set(address: number, value: number) {

        this.memory[address] = value;
    }

    get data(): number[] {

        return this.memory;
    }

    get size(): number {

        return this.memory.length;
    }
}