"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IntcodeProcessor_1 = require("./IntcodeProcessor");
var intcode = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 9, 1, 19, 1, 9, 19, 23, 1, 23, 5, 27, 2, 27, 10, 31, 1, 6, 31, 35, 1, 6, 35, 39, 2, 9, 39, 43, 1, 6, 43, 47, 1, 47, 5, 51, 1, 51, 13, 55, 1, 55, 13, 59, 1, 59, 5, 63, 2, 63, 6, 67, 1, 5, 67, 71, 1, 71, 13, 75, 1, 10, 75, 79, 2, 79, 6, 83, 2, 9, 83, 87, 1, 5, 87, 91, 1, 91, 5, 95, 2, 9, 95, 99, 1, 6, 99, 103, 1, 9, 103, 107, 2, 9, 107, 111, 1, 111, 6, 115, 2, 9, 115, 119, 1, 119, 6, 123, 1, 123, 9, 127, 2, 127, 13, 131, 1, 131, 9, 135, 1, 10, 135, 139, 2, 139, 10, 143, 1, 143, 5, 147, 2, 147, 6, 151, 1, 151, 5, 155, 1, 2, 155, 159, 1, 6, 159, 0, 99, 2, 0, 14, 0];
var intcodeProcessor = new IntcodeProcessor_1.default();
function restoreProgram(a, b) {
    intcode[1] = a;
    intcode[2] = b;
}
// --- Part I ---
// restoreProgram(12, 2);
// let result = intcodeProcessor.process(intcode);
// console.log(JSON.stringify(result));
// --- Part II ---
function calculateOutput() {
    for (var noun = 0; noun <= 99; noun++) {
        for (var verb = 0; verb <= 99; verb++) {
            restoreProgram(noun, verb);
            var result = intcodeProcessor.process(intcode);
            if (result[0] === 19690720) {
                return 100 * noun + verb;
            }
        }
    }
}
console.time('FooTimer');
console.log(calculateOutput());
console.timeEnd('FooTimer');
