"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Opcode_1 = require("./Opcode");
var IntcodeProcessor = /** @class */ (function () {
    function IntcodeProcessor() {
    }
    IntcodeProcessor.prototype.process = function (intcode) {
        this.memory = __spreadArrays(intcode);
        for (var pointer = 0; pointer < this.memory.length; pointer += 4) {
            var opcode = this.memory[pointer];
            if (opcode === Opcode_1.Opcode.HALT)
                return this.memory;
            this.processInstruction(pointer, opcode);
        }
    };
    IntcodeProcessor.prototype.processInstruction = function (pointer, opcode) {
        var _a = this.getParamsAddresses(pointer), firstParamAddress = _a.firstParamAddress, secondParamAddress = _a.secondParamAddress, outputAddress = _a.outputAddress;
        if (opcode === Opcode_1.Opcode.ADD) {
            this.memory[outputAddress] = this.memory[firstParamAddress] + this.memory[secondParamAddress];
        }
        if (opcode === Opcode_1.Opcode.MULTIPLY) {
            this.memory[outputAddress] = this.memory[firstParamAddress] * this.memory[secondParamAddress];
        }
    };
    IntcodeProcessor.prototype.getParamsAddresses = function (i) {
        return {
            firstParamAddress: this.memory[i + 1],
            secondParamAddress: this.memory[i + 2],
            outputAddress: this.memory[i + 3]
        };
    };
    return IntcodeProcessor;
}());
exports.default = IntcodeProcessor;
