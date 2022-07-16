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
const option_1 = __importStar(require("./option"));
describe('#Some', () => {
    it('Some(Some(Some(5) === Some(5)', () => {
        const optInt = (0, option_1.Some)((0, option_1.Some)((0, option_1.Some)(5)));
        expect(option_1.default.unwrap(optInt))
            .toBe(option_1.default.unwrap((0, option_1.Some)(5)));
    });
});
describe('#isSome', () => {
    it('returns Option$Some', () => {
        const optInt = (0, option_1.Some)(10);
        expect((0, option_1.isSome)(optInt)).toBe(true);
        expect((0, option_1.isNone)(optInt)).toBe(false);
    });
});
describe('#isNone', () => {
    it('returns Option$None', () => {
        const optInt = (0, option_1.None)();
        expect((0, option_1.isNone)(optInt)).toBe(true);
        expect((0, option_1.isSome)(optInt)).toBe(false);
    });
});
describe('#fromSome', () => {
    it('happy flow', () => {
        const optInt = (0, option_1.Some)(10);
        expect(option_1.default.of(optInt)).toEqual((0, option_1.Some)(10));
    });
});
describe('#unwrap', () => {
    it('(Some) returns value', () => {
        const optInt = (0, option_1.Some)(10);
        expect(option_1.default.unwrap(optInt)).toBe(10);
    });
    it('(None) throws', () => {
        const optInt = (0, option_1.None)();
        expect(() => option_1.default.unwrap(optInt)).toThrowError(option_1.OptionUnwrapError);
    });
});
describe('#map', () => {
    it('2# - Just', () => {
        const optInt = (0, option_1.Some)(10);
        const optIntResult = option_1.default.map((it) => it * 2)(optInt);
        expect(option_1.default.unwrap(optIntResult)).toBe(20);
    });
    it('2# - None', () => {
        const optInt = (0, option_1.None)();
        const optIntResult = option_1.default.map((it) => it * 2)(optInt);
        expect((0, option_1.isNone)(optIntResult)).toBe(true);
    });
    it('1# - Just', () => {
        const optInt = (0, option_1.Some)(10);
        const mapper = option_1.default.map((it) => it * 2);
        expect(mapper instanceof Function).toBe(true);
        const optIntResult = mapper(optInt);
        expect(option_1.default.unwrap(optIntResult)).toBe(20);
    });
    it('1# - None', () => {
        const optInt = (0, option_1.None)();
        const mapper = option_1.default.map((it) => it * 2);
        expect(mapper instanceof Function).toBe(true);
        const optIntResult = mapper(optInt);
        expect((0, option_1.isNone)(optIntResult)).toBe(true);
    });
});
