"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Opcode_1 = require("./Opcode");
var AddOperation_1 = require("./AddOperation");
var MultiplyOperation_1 = require("./MultiplyOperation");
var IntcodeProcessor = /** @class */ (function () {
    function IntcodeProcessor(memory) {
        this.memory = memory;
    }
    IntcodeProcessor.prototype.process = function (intcode) {
        this.memory.init(intcode);
        for (var pointer = 0; pointer < this.memory.size; pointer += 4) {
            var opcode = this.memory.get(pointer);
            if (opcode === Opcode_1.Opcode.HALT)
                return this.memory.data;
            this.processInstruction(pointer, opcode);
        }
    };
    IntcodeProcessor.prototype.processInstruction = function (pointer, opcode) {
        var firstParamAddress = this.memory.get(pointer + 1);
        var secondParamAddress = this.memory.get(pointer + 2);
        var outputAddress = this.memory.get(pointer + 3);
        var operation = this.getOperation(opcode);
        var output = operation.execute(this.memory.get(firstParamAddress), this.memory.get(secondParamAddress));
        this.memory.set(outputAddress, output);
    };
    IntcodeProcessor.prototype.getOperation = function (opcode) {
        if (opcode === Opcode_1.Opcode.ADD) {
            return new AddOperation_1.default();
        }
        if (opcode === Opcode_1.Opcode.MULTIPLY) {
            return new MultiplyOperation_1.default();
        }
    };
    return IntcodeProcessor;
}());
exports.default = IntcodeProcessor;
