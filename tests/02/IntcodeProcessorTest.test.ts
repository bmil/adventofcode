import IntcodeProcessor from "../../src/02/IntcodeProcessor";
import Memory from "../../src/02/Memory";

describe.each([
    [[1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]],
    [[1, 0, 0, 0, 99], [2, 0, 0, 0, 99]],
    [[2, 3, 0, 3, 99], [2, 3, 0, 6, 99]],
    [[2, 4, 4, 5, 99, 0], [2, 4, 4, 5, 99, 9801]],
    [[1, 1, 1, 4, 99, 5, 6, 0, 99], [30, 1, 1, 4, 2, 5, 6, 0, 99]]
])('intcodeProcessor#process()', (intcode, expected) => {
    test(`should add data`, () => {
        const memory = new Memory();
        const intcodeProcessor = new IntcodeProcessor(memory);
        let result = intcodeProcessor.process(intcode);
        expect(result).toStrictEqual(expected);
    });
});
