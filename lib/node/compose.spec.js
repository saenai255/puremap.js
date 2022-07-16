"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("./array"));
const compose_1 = __importDefault(require("./compose"));
describe('#compose', () => {
    it('trial #1', () => {
        const mapper = compose_1.default.$((it) => it * 2, it => it + '_xx', () => 'true', Boolean);
        expect(mapper(5)).toEqual(true);
    });
    it('trial #2', () => {
        const mapper = compose_1.default.$((it) => it * 2, it => it < 5);
        expect(mapper(5)).toEqual(false);
    });
    it('trial #3', () => {
        const mapper = compose_1.default.$(array_1.default.map((it) => it * 2), array_1.default.every(it => it > 5));
        expect(mapper([3, 4])).toEqual(true);
    });
});
