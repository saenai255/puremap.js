"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("./array"));
const compose_1 = __importDefault(require("./compose"));
const result_1 = __importDefault(require("./result"));
compose_1.default.$((it) => result_1.default.of(() => it), result_1.default.$(array_1.default.map(it => it * 2), array_1.default.gte(6), array_1.default.sum()), result_1.default.unwrap(), compose_1.default.debug())([1, 2, 3, 4, 5]);
