"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = __importStar(require("./result"));
process.stdout.write('started\n');
const doThrow = (e) => {
    throw e;
};
describe('Result', () => {
    describe('#map', () => {
        it('returns Ok', () => {
            const intFn = () => 5;
            const intResult = result_1.default.of(intFn);
            let resultTen = intResult;
            for (let i = 0; i < 5; i++) {
                resultTen = result_1.default.map((it) => it + 1)(resultTen);
            }
            let pTen = result_1.default.unwrap()(resultTen);
            expect(pTen).toBe(10);
        });
        it('returns Err', async () => {
            const intFn = () => doThrow(5);
            const intResult = result_1.default.of(intFn);
            let resultTen = intResult;
            for (let i = 0; i < 4; i++) {
                resultTen = result_1.default.map((it) => it + 1)(resultTen);
            }
            expect(() => result_1.default.unwrap()(resultTen)).toThrow();
        });
    });
    describe('#mapErr', () => {
        it('does not map Ok', () => {
            const intFn = () => 5;
            const intResult = result_1.default.of(intFn);
            let resultTen = intResult;
            for (let i = 0; i < 5; i++) {
                resultTen = result_1.default.mapErr((it) => it + 1)(resultTen);
            }
            let pTen = result_1.default.unwrap()(resultTen);
            expect(pTen).toBe(5);
        });
        it('does map Err', async () => {
            const intFn = () => doThrow('');
            const emptyStringResult = result_1.default.of(intFn);
            let fiveXs = emptyStringResult;
            for (let i = 0; i < 5; i++) {
                fiveXs = result_1.default.mapErr((it) => it + 'X')(fiveXs);
            }
            expect(() => result_1.default.unwrap()(fiveXs)).toThrowError(new result_1.ResultUnwrapError('XXXXX'));
        });
    });
    describe('#of', () => {
        it('return Err on throw', () => {
            const intFn = () => doThrow(5);
            const intResult = result_1.default.of(intFn);
            expect(() => result_1.default.unwrap()(intResult)).toThrow();
        });
        it('return Ok', () => {
            const intFn = () => 5;
            const intResult = result_1.default.of(intFn);
            expect(result_1.default.unwrap()(intResult)).toEqual(5);
        });
    });
    it('#isOk, #isErr', () => {
        const err = result_1.default.of(() => doThrow(5));
        const ok = result_1.default.of(() => 5);
        expect((0, result_1.isErr)(ok)).toBe(false);
        expect((0, result_1.isErr)(err)).toBe(true);
        expect((0, result_1.isOk)(ok)).toBe(true);
        expect((0, result_1.isOk)(err)).toBe(false);
    });
    describe('#merge', () => {
        it('of err', () => {
            const err = result_1.default.of(() => doThrow(5));
            const value = result_1.default.merge()(err);
            expect(value).toEqual(5);
        });
        it('of ok', () => {
            const ok = result_1.default.of(() => 5);
            const value = result_1.default.merge()(ok);
            expect(value).toEqual(5);
        });
    });
});
