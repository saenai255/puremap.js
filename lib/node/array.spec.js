"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("./array"));
const option_1 = require("./option");
const result_1 = require("./result");
describe('Arrays', () => {
    const originalNums = [1, 2, 3, 4];
    it('#map', () => {
        const nums = [...originalNums];
        const fn = array_1.default.map((it) => it * 2);
        expect(fn(nums)).toEqual([2, 4, 6, 8]);
        expect(nums).toEqual(originalNums);
    });
    it('#filter', () => {
        const nums = [...originalNums];
        const fn = array_1.default.filter((it) => it === 4);
        expect(fn(nums)).toEqual([4]);
        expect(nums).toEqual(originalNums);
    });
    describe('#some', () => {
        it('predicate returns true', () => {
            const nums = [...originalNums];
            const fn = array_1.default.some((it) => it === 4);
            expect(fn(nums)).toEqual(true);
            expect(nums).toEqual(originalNums);
        });
        it('predicate returns false', () => {
            const nums = [...originalNums];
            const fn = array_1.default.some((it) => it === 5);
            expect(fn(nums)).toEqual(false);
            expect(nums).toEqual(originalNums);
        });
    });
    describe('#every', () => {
        it('predicate returns true', () => {
            const nums = [...originalNums];
            const fn = array_1.default.every((it) => it < 5);
            expect(fn(nums)).toEqual(true);
            expect(nums).toEqual(originalNums);
        });
        it('predicate returns false', () => {
            const nums = [...originalNums];
            const fn = array_1.default.every((it) => it > 5);
            expect(fn(nums)).toEqual(false);
            expect(nums).toEqual(originalNums);
        });
    });
    describe('#find', () => {
        it('returns Just', () => {
            const nums = [...originalNums];
            const fn = array_1.default.find((it) => it < 5);
            expect(fn(nums)).toEqual((0, option_1.Some)(1));
            expect(nums).toEqual(originalNums);
        });
        it('return None', () => {
            const nums = [...originalNums];
            const fn = array_1.default.find((it) => it > 5);
            expect(fn(nums)).toEqual((0, option_1.None)());
            expect(nums).toEqual(originalNums);
        });
    });
    describe('#foldl', () => {
        it('returns division of non-empty array', () => {
            const nums = [...originalNums];
            const fn = array_1.default.foldl((left, right) => left / right, 1);
            expect(fn(nums)).toBeCloseTo(1 / 2 / 3 / 4);
            expect(nums).toEqual(originalNums);
        });
        it('return division of empty array', () => {
            const fn = array_1.default.foldl((left, right) => left / right, 1);
            expect(fn([])).toEqual(1);
        });
    });
    describe('#foldr', () => {
        it('returns concat of non-empty array', () => {
            const nums = [...originalNums].map(String);
            const fn = array_1.default.foldr((left, right) => left + right, '');
            expect(fn(nums)).toEqual('4321');
            expect(nums).toEqual(originalNums.map(String));
        });
        it('return division of empty array', () => {
            const fn = array_1.default.foldr((left, right) => left / right, 1);
            expect(fn([])).toEqual(1);
        });
    });
    describe('#reduce', () => {
        it('returns sum of non-empty array', () => {
            const nums = [...originalNums];
            const fn = array_1.default.reduce((acc, it) => acc + it, 0);
            expect(fn(nums)).toEqual(1 + 2 + 3 + 4);
            expect(nums).toEqual(originalNums);
        });
        it('return sum of empty array', () => {
            const fn = array_1.default.reduce((acc, it) => acc + it, 0);
            expect(fn([])).toEqual(0);
        });
    });
    describe('#reduceRight', () => {
        it('returns concat of non-empty array', () => {
            const nums = [...originalNums].map(String);
            const fn = array_1.default.reduceRight((acc, it) => acc + it, '');
            expect(fn(nums)).toEqual('4321');
            expect(nums).toEqual(originalNums.map(String));
        });
        it('return concat of empty array', () => {
            const fn = array_1.default.reduceRight((acc, it) => acc + it, '');
            expect(fn([])).toEqual('');
        });
    });
    describe('#isEmpty', () => {
        it('true for []', () => {
            const nums = [];
            const fn = array_1.default.isEmpty();
            expect(fn(nums)).toEqual(true);
        });
        it('false for non []', () => {
            const nums = [...originalNums];
            const fn = array_1.default.isEmpty();
            expect(fn(nums)).toEqual(false);
        });
    });
    describe('#isEmpty', () => {
        it('true for []', () => {
            const nums = [];
            const fn = array_1.default.isEmpty();
            expect(fn(nums)).toEqual(true);
        });
        it('false for non []', () => {
            const nums = [...originalNums];
            const fn = array_1.default.isEmpty();
            expect(fn(nums)).toEqual(false);
        });
    });
    describe('#fromString', () => {
        it('using "asdf"', () => {
            const str = 'asdf';
            const fn = array_1.default.fromString('');
            expect(fn(str)).toEqual(['a', 's', 'd', 'f']);
        });
        it('using "1,2,3,4"', () => {
            const str = '1,2,3,4';
            const fn = array_1.default.fromString(',');
            expect(fn(str)).toEqual(['1', '2', '3', '4']);
        });
    });
    describe('#join', () => {
        it('using ["a", "s", "d", "f"]', () => {
            const strArr = ['a', 's', 'd', 'f'];
            const fn = array_1.default.join('');
            expect(fn(strArr)).toEqual('asdf');
        });
        it('using ["1", "2", "3", "4"]', () => {
            const strArr = ['1', '2', '3', '4'];
            const fn = array_1.default.join(',');
            expect(fn(strArr)).toEqual('1,2,3,4');
        });
    });
    describe('#sum', () => {
        it('using empty array', () => {
            const nums = [];
            const fn = array_1.default.sum();
            expect(fn(nums)).toEqual(0);
        });
        it('using non-empty array', () => {
            const nums = [...originalNums];
            const fn = array_1.default.sum();
            expect(fn(nums)).toEqual(1 + 2 + 3 + 4);
            expect(nums).toEqual(originalNums);
        });
    });
    describe('#product', () => {
        it('using empty array', () => {
            const nums = [];
            const fn = array_1.default.product();
            expect(fn(nums)).toEqual(1);
        });
        it('using non-empty array', () => {
            const nums = [...originalNums];
            const fn = array_1.default.product();
            expect(fn(nums)).toEqual(1 * 2 * 3 * 4);
            expect(nums).toEqual(originalNums);
        });
    });
    it('#pow', () => {
        const nums = [...originalNums];
        const fn = array_1.default.pow(2);
        expect(fn(nums)).toEqual([1, 4, 9, 16]);
        expect(nums).toEqual(originalNums);
    });
    it('#powOf', () => {
        const nums = [...originalNums];
        const fn = array_1.default.powOf(2);
        expect(fn(nums)).toEqual([2, 4, 8, 16]);
        expect(nums).toEqual(originalNums);
    });
    describe('#divBy', () => {
        it('non zero div', () => {
            const nums = [...originalNums];
            const fn = array_1.default.divBy(2);
            expect(fn(nums)).toEqual([0.5, 1, 1.5, 2].map(result_1.Ok));
            expect(nums).toEqual(originalNums);
        });
        it('zero div', () => {
            const nums = [...originalNums];
            const fn = array_1.default.divBy(0);
            for (const result of fn(nums)) {
                expect((0, result_1.isErr)(result)).toBe(true);
            }
            expect(nums).toEqual(originalNums);
        });
    });
    describe('#divOf', () => {
        it('non zero div', () => {
            const nums = [...originalNums];
            const fn = array_1.default.divOf(2);
            expect(fn(nums)).toEqual([2, 1, 2 / 3, 0.5].map(result_1.Ok));
            expect(nums).toEqual(originalNums);
        });
        it('zero div', () => {
            const nums = [0, 0, 0, 0];
            const fn = array_1.default.divOf(2);
            for (const result of fn(nums)) {
                expect((0, result_1.isErr)(result)).toBe(true);
            }
        });
    });
    describe('#tuple', () => {
        it('size is divisor array len', () => {
            const nums = [...originalNums];
            const fn = array_1.default.tuple(2);
            expect(fn(nums)).toEqual([
                [(0, option_1.Some)(1), (0, option_1.Some)(2)],
                [(0, option_1.Some)(3), (0, option_1.Some)(4)]
            ]);
            expect(nums).toEqual(originalNums);
        });
        it('size is not divisor array len', () => {
            const nums = [...originalNums];
            const fn = array_1.default.tuple(3);
            expect(fn(nums)).toEqual([
                [(0, option_1.Some)(1), (0, option_1.Some)(2), (0, option_1.Some)(3)],
                [(0, option_1.Some)(4), (0, option_1.None)(), (0, option_1.None)()]
            ]);
            expect(nums).toEqual(originalNums);
        });
        it('size > array len', () => {
            const nums = [...originalNums];
            const fn = array_1.default.tuple(5);
            expect(fn(nums)).toEqual([
                [(0, option_1.Some)(1), (0, option_1.Some)(2), (0, option_1.Some)(3), (0, option_1.Some)(4), (0, option_1.None)()]
            ]);
            expect(nums).toEqual(originalNums);
        });
    });
    it('#flat', () => {
        const nums = [[...originalNums]];
        const fn = array_1.default.flat();
        expect(fn(nums)).toEqual(originalNums);
    });
    it('#flatMap', () => {
        const nums = [[...originalNums]];
        const fn = array_1.default.flatMap((it) => it);
        expect(fn(nums)).toEqual(originalNums);
    });
    describe('#first', () => {
        it('empty array', () => {
            const nums = [];
            const fn = array_1.default.first();
            expect(fn(nums)).toEqual((0, option_1.None)());
        });
        it('non-empty array', () => {
            const nums = [...originalNums];
            const fn = array_1.default.first();
            expect(fn(nums)).toEqual((0, option_1.Some)(originalNums[0]));
            expect(nums).toEqual(originalNums);
        });
    });
    describe('#last', () => {
        it('empty array', () => {
            const nums = [];
            const fn = array_1.default.last();
            expect(fn(nums)).toEqual((0, option_1.None)());
        });
        it('non-empty array', () => {
            const nums = [...originalNums];
            const fn = array_1.default.last();
            expect(fn(nums)).toEqual((0, option_1.Some)(originalNums.at(-1)));
            expect(nums).toEqual(originalNums);
        });
    });
    it('#append', () => {
        const nums = [...originalNums];
        const fn = array_1.default.append(2);
        expect(fn(nums)).toEqual([1, 2, 3, 4, 2]);
        expect(nums).toEqual(originalNums);
    });
    it('#prepend', () => {
        const nums = [...originalNums];
        const fn = array_1.default.prepend(2);
        expect(fn(nums)).toEqual([2, 1, 2, 3, 4]);
        expect(nums).toEqual(originalNums);
    });
    it('#reverse', () => {
        const nums = [...originalNums];
        const fn = array_1.default.reverse();
        expect(fn(nums)).toEqual([4, 3, 2, 1]);
        expect(nums).toEqual(originalNums);
    });
    it('#between', () => {
        const nums = [...originalNums];
        const fn = array_1.default.between(1, 4);
        expect(fn(nums)).toEqual([2, 3]);
        expect(nums).toEqual(originalNums);
    });
    it('#betweenEq', () => {
        const nums = [...originalNums];
        const fn = array_1.default.betweenEq(2, 3);
        expect(fn(nums)).toEqual([2, 3]);
        expect(nums).toEqual(originalNums);
    });
    it('#gt', () => {
        const nums = [...originalNums];
        const fn = array_1.default.gt(3);
        expect(fn(nums)).toEqual([4]);
        expect(nums).toEqual(originalNums);
    });
    it('#gte', () => {
        const nums = [...originalNums];
        const fn = array_1.default.gte(3);
        expect(fn(nums)).toEqual([3, 4]);
        expect(nums).toEqual(originalNums);
    });
    it('#lte', () => {
        const nums = [...originalNums];
        const fn = array_1.default.lte(2);
        expect(fn(nums)).toEqual([1, 2]);
        expect(nums).toEqual(originalNums);
    });
    it('#lt', () => {
        const nums = [...originalNums];
        const fn = array_1.default.lt(2);
        expect(fn(nums)).toEqual([1]);
        expect(nums).toEqual(originalNums);
    });
    it('#debug', () => {
        const nums = [...originalNums];
        const fn = array_1.default.debug('test');
        expect(fn(nums)).toEqual(nums);
        expect(nums).toEqual(originalNums);
    });
    it('#shiftl', () => {
        const nums = [...originalNums];
        const fn = array_1.default.shiftl(2);
        expect(fn(nums)).toEqual([3, 4, 1, 2]);
        expect(nums).toEqual(originalNums);
    });
    it('#shiftr', () => {
        const nums = [...originalNums];
        const fn = array_1.default.shiftr(3);
        expect(fn(nums)).toEqual([2, 3, 4, 1]);
        expect(nums).toEqual(originalNums);
    });
    describe('#sort', () => {
        it('numbers asc', () => {
            const nums = [...originalNums, -1];
            const fn = array_1.default.sort(array_1.default.sorter.asc);
            expect(fn(nums)).toEqual([-1, 1, 2, 3, 4]);
            expect(nums).toEqual([...originalNums, -1]);
        });
        it('numbers desc', () => {
            const nums = [...originalNums, -1];
            const fn = array_1.default.sort(array_1.default.sorter.desc);
            expect(fn(nums)).toEqual([4, 3, 2, 1, -1]);
            expect(nums).toEqual([...originalNums, -1]);
        });
        it('strings asc', () => {
            const nums = [...originalNums.map(String), 'aa', 'a'];
            const fn = array_1.default.sort(array_1.default.sorter.asc);
            expect(fn(nums)).toEqual(['1', '2', '3', '4', 'a', 'aa']);
            expect(nums).toEqual([...originalNums.map(String), 'aa', 'a']);
        });
        it('strings desc', () => {
            const nums = [...originalNums.map(String), 'aa', 'a'];
            const fn = array_1.default.sort(array_1.default.sorter.desc);
            expect(fn(nums)).toEqual(['1', '2', '3', '4', 'a', 'aa'].reverse());
            expect(nums).toEqual([...originalNums.map(String), 'aa', 'a']);
        });
        it('booleans asc', () => {
            const nums = [...[false, true, true, false]];
            const fn = array_1.default.sort(array_1.default.sorter.asc);
            expect(fn(nums)).toEqual([false, false, true, true]);
            expect(nums).toEqual([...[false, true, true, false]]);
        });
        it('booleans desc', () => {
            const nums = [...[false, true, true, false]];
            const fn = array_1.default.sort(array_1.default.sorter.desc);
            expect(fn(nums)).toEqual([false, false, true, true].reverse());
            expect(nums).toEqual([...[false, true, true, false]]);
        });
        it('default is ASC', () => {
            const nums = [...originalNums, -1];
            const fn = array_1.default.sort();
            expect(fn(nums)).toEqual([-1, 1, 2, 3, 4]);
            expect(nums).toEqual([...originalNums, -1]);
        });
    });
    it('#concat', () => {
        const nums = [...originalNums];
        const fn = array_1.default.concat([5, 6]);
        expect(fn(nums)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(nums).toEqual(originalNums);
    });
    it('#toObject', () => {
        const nums = [...originalNums];
        const fn = array_1.default.toObject((el, idx) => `${el}-${idx}`);
        expect(fn(nums)).toEqual({
            '1-0': 1,
            '2-1': 2,
            '3-2': 3,
            '4-3': 4
        });
        expect(nums).toEqual(originalNums);
    });
    it('#fromObject', () => {
        const nums = [...originalNums];
        const fn = array_1.default.fromObject(key => Number(key[0]));
        expect(fn({
            '1-0': 1,
            '2-1': 2,
            '3-2': 3,
            '4-3': 4
        })).toEqual(nums);
        expect(nums).toEqual(originalNums);
    });
    it('#unique', () => {
        const nums = [...originalNums, ...originalNums];
        const fn = array_1.default.unique();
        expect(fn(nums)).toEqual(originalNums);
        expect(nums).toEqual([...originalNums, ...originalNums]);
    });
    it('#uniqueBy', () => {
        const nums = [...originalNums];
        const fn = array_1.default.uniqueBy((a, b) => Boolean(a) === Boolean(b));
        expect(fn(nums)).toEqual([1]);
        expect(nums).toEqual(originalNums);
    });
});
