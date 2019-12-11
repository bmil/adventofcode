"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IntcodeProcessor_1 = require("../../src/02/IntcodeProcessor");
describe.each([
    [[1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]],
    [[1, 0, 0, 0, 99], [2, 0, 0, 0, 99]],
    [[2, 3, 0, 3, 99], [2, 3, 0, 6, 99]],
    [[2, 4, 4, 5, 99, 0], [2, 4, 4, 5, 99, 9801]],
    [[1, 1, 1, 4, 99, 5, 6, 0, 99], [30, 1, 1, 4, 2, 5, 6, 0, 99]]
])('intcodeProcessor#process()', function (intcode, expected) {
    test("should add data", function () {
        var intcodeProcessor = new IntcodeProcessor_1.default();
        var result = intcodeProcessor.process(intcode);
        expect(result).toStrictEqual(expected);
    });
});
