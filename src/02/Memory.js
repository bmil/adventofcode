"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Memory = /** @class */ (function () {
    function Memory() {
    }
    Memory.prototype.init = function (intcode) {
        this.memory = __spreadArrays(intcode);
    };
    Memory.prototype.get = function (address) {
        return this.memory[address];
    };
    Memory.prototype.set = function (address, value) {
        this.memory[address] = value;
    };
    Object.defineProperty(Memory.prototype, "data", {
        get: function () {
            return this.memory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Memory.prototype, "size", {
        get: function () {
            return this.memory.length;
        },
        enumerable: true,
        configurable: true
    });
    return Memory;
}());
exports.default = Memory;
