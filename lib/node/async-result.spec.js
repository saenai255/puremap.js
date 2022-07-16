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
const async_result_1 = __importStar(require("./async-result"));
process.stdout.write('started\n');
describe('AsyncResult', () => {
    describe('#mapAsyncResult', () => {
        it('resolves correctly', () => {
            const pIntFn = () => Promise.resolve(5);
            const arInt = async_result_1.default.of(pIntFn);
            let arTen = arInt;
            for (let i = 0; i < 5; i++) {
                arTen = async_result_1.default.map((it) => it + 1)(arTen);
            }
            let pTen = async_result_1.default.unwrap(arTen);
            expect(pTen).resolves.toBe(10);
        });
        it('rejects correctly', async () => {
            const pIntFn = () => Promise.reject(5);
            const arInt = async_result_1.default.of(pIntFn);
            let arTen = arInt;
            for (let i = 0; i < 4; i++) {
                arTen = async_result_1.default.map((it) => it + 1)(arTen);
            }
            expect(async_result_1.default.unwrap(arTen)).rejects.toEqual(5);
        });
    });
    describe('#toAsyncResult', () => {
        it('return Err on reject', () => {
            const pIntFn = () => Promise.reject(5);
            const arInt = async_result_1.default.of(pIntFn);
            expect(async_result_1.default.unwrap(arInt)).rejects.toEqual(5);
        });
        it('return Ok on resolve', () => {
            const pIntFn = () => Promise.resolve(5);
            const arInt = async_result_1.default.of(pIntFn);
            expect(async_result_1.default.unwrap(arInt)).resolves.toEqual(5);
        });
    });
    it('#isAsyncResultOk, #isAsyncResultErr', () => {
        const err = async_result_1.default.of(() => Promise.reject(5));
        const ok = async_result_1.default.of(() => Promise.resolve(5));
        expect((0, async_result_1.isAsyncErr)()(ok).then(it => it[0])).resolves.toBe(false);
        expect((0, async_result_1.isAsyncErr)()(err).then(it => it[0])).resolves.toBe(true);
        expect((0, async_result_1.isAsyncOk)()(ok).then(it => it[0])).resolves.toBe(true);
        expect((0, async_result_1.isAsyncOk)()(err).then(it => it[0])).resolves.toBe(false);
    });
});
