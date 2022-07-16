import Arrays from "./array"
import { Some, None } from "./option";
import { Err, isErr, Ok } from "./result";

describe('Arrays', () => {
    const originalNums = [1, 2, 3, 4];
    it('#map', () => {
        const nums = [...originalNums];
        const fn = Arrays.map((it: number) => it * 2);

        expect(fn(nums)).toEqual([2, 4, 6, 8]);
        expect(nums).toEqual(originalNums);
    });

    it('#filter', () => {
        const nums = [...originalNums];
        const fn = Arrays.filter((it: number) => it === 4);

        expect(fn(nums)).toEqual([4]);
        expect(nums).toEqual(originalNums);
    });

    describe('#some', () => {
        it('predicate returns true', () => {
            const nums = [...originalNums];
            const fn = Arrays.some((it: number) => it === 4);
    
            expect(fn(nums)).toEqual(true);
            expect(nums).toEqual(originalNums);
        });

        it('predicate returns false', () => {
            const nums = [...originalNums];
            const fn = Arrays.some((it: number) => it === 5);
    
            expect(fn(nums)).toEqual(false);
            expect(nums).toEqual(originalNums);
        });
    });

    describe('#every', () => {
        it('predicate returns true', () => {
            const nums = [...originalNums];
            const fn = Arrays.every((it: number) => it < 5);
    
            expect(fn(nums)).toEqual(true);
            expect(nums).toEqual(originalNums);
        });

        it('predicate returns false', () => {
            const nums = [...originalNums];
            const fn = Arrays.every((it: number) => it > 5);
    
            expect(fn(nums)).toEqual(false);
            expect(nums).toEqual(originalNums);
        });
    });

    describe('#find', () => {
        it('returns Just', () => {
            const nums = [...originalNums];
            const fn = Arrays.find((it: number) => it < 5);
    
            expect(fn(nums)).toEqual(Some(1));
            expect(nums).toEqual(originalNums);
        });

        it('return None', () => {
            const nums = [...originalNums];
            const fn = Arrays.find((it: number) => it > 5);
    
            expect(fn(nums)).toEqual(None());
            expect(nums).toEqual(originalNums);
        });
    });

    describe('#foldl', () => {
        it('returns division of non-empty array', () => {
            const nums = [...originalNums];
            const fn = Arrays.foldl((left, right) => left / right, 1);
    
            expect(fn(nums)).toBeCloseTo(1 / 2 / 3 / 4);
            expect(nums).toEqual(originalNums);
        });

        it('return division of empty array', () => {
            const fn = Arrays.foldl((left, right) => left / right, 1);
    
            expect(fn([])).toEqual(1);
        });
    });

    describe('#foldr', () => {
        it('returns concat of non-empty array', () => {
            const nums = [...originalNums].map(String);
            const fn = Arrays.foldr((left, right) => left + right, '');
    
            expect(fn(nums)).toEqual('4321')
            expect(nums).toEqual(originalNums.map(String));
        });

        it('return division of empty array', () => {
            const fn = Arrays.foldr((left, right) => left / right, 1);
    
            expect(fn([])).toEqual(1);
        });
    });

    describe('#reduce', () => {
        it('returns sum of non-empty array', () => {
            const nums = [...originalNums];
            const fn = Arrays.reduce((acc: number, it: number) => acc + it, 0);
    
            expect(fn(nums)).toEqual(1 + 2 + 3 + 4);
            expect(nums).toEqual(originalNums);
        });

        it('return sum of empty array', () => {
            const fn = Arrays.reduce((acc: number, it: number) => acc + it, 0);
    
            expect(fn([])).toEqual(0);
        });
    });

    describe('#reduceRight', () => {
        it('returns concat of non-empty array', () => {
            const nums = [...originalNums].map(String);
            const fn = Arrays.reduceRight((acc, it) => acc + it, '');
    
            expect(fn(nums)).toEqual('4321');
            expect(nums).toEqual(originalNums.map(String));
        });

        it('return concat of empty array', () => {
            const fn = Arrays.reduceRight((acc, it) => acc + it, '');
    
            expect(fn([])).toEqual('');
        });
    });

    describe('#isEmpty', () => {
        it('true for []', () => {
            const nums = [];
            const fn = Arrays.isEmpty()
            expect(fn(nums)).toEqual(true);
        });

        it('false for non []', () => {
            const nums = [...originalNums];
            const fn = Arrays.isEmpty()
            expect(fn(nums)).toEqual(false);
        });
    });

    describe('#isEmpty', () => {
        it('true for []', () => {
            const nums = [];
            const fn = Arrays.isEmpty()
            expect(fn(nums)).toEqual(true);
        });

        it('false for non []', () => {
            const nums = [...originalNums];
            const fn = Arrays.isEmpty()
            expect(fn(nums)).toEqual(false);
        });
    });

    describe('#fromString', () => {
        it('using "asdf"', () => {
            const str = 'asdf'
            const fn = Arrays.fromString('')
            expect(fn(str)).toEqual(['a', 's', 'd', 'f']);
        });

        it('using "1,2,3,4"', () => {
            const str = '1,2,3,4'
            const fn = Arrays.fromString(',')
            expect(fn(str)).toEqual(['1', '2', '3', '4']);
        });
    });

    describe('#join', () => {
        it('using ["a", "s", "d", "f"]', () => {
            const strArr = ['a', 's', 'd', 'f']
            const fn = Arrays.join('')
            expect(fn(strArr)).toEqual('asdf');
        });

        it('using ["1", "2", "3", "4"]', () => {
            const strArr = ['1', '2', '3', '4']
            const fn = Arrays.join(',')
            expect(fn(strArr)).toEqual('1,2,3,4');
        });
    });

    describe('#sum', () => {
        it('using empty array', () => {
            const nums = []
            const fn = Arrays.sum()
            expect(fn(nums)).toEqual(0);
        });

        it('using non-empty array', () => {
            const nums = [ ...originalNums ]
            const fn = Arrays.sum()
            expect(fn(nums)).toEqual(1 + 2 + 3 + 4);
            expect(nums).toEqual(originalNums);
        });
    });

    describe('#product', () => {
        it('using empty array', () => {
            const nums = []
            const fn = Arrays.product()
            expect(fn(nums)).toEqual(1);
        });

        it('using non-empty array', () => {
            const nums = [ ...originalNums ]
            const fn = Arrays.product()
            expect(fn(nums)).toEqual(1 * 2 * 3 * 4);
            expect(nums).toEqual(originalNums);
        });
    });

    it('#pow', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.pow(2)
        expect(fn(nums)).toEqual([1, 4, 9, 16]);
        expect(nums).toEqual(originalNums);
    });

    it('#powOf', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.powOf(2)
        expect(fn(nums)).toEqual([2, 4, 8, 16]);
        expect(nums).toEqual(originalNums);
    });

    describe('#divBy', () => {
        it('non zero div', () => {
            const nums = [ ...originalNums ]
            const fn = Arrays.divBy(2)
            expect(fn(nums)).toEqual([0.5, 1, 1.5, 2].map(Ok));
            expect(nums).toEqual(originalNums);
        });

        it('zero div', () => {
            const nums = [ ...originalNums ]
            const fn = Arrays.divBy(0)
            for (const result of fn(nums)) {
                expect(isErr(result)).toBe(true)
            }
            expect(nums).toEqual(originalNums);
        });
    });

    describe('#divOf', () => {
        it('non zero div', () => {
            const nums = [ ...originalNums ]
            const fn = Arrays.divOf(2)
            expect(fn(nums)).toEqual([2, 1, 2/3, 0.5].map(Ok));
            expect(nums).toEqual(originalNums);
        });

        it('zero div', () => {
            const nums = [ 0, 0, 0, 0 ]
            const fn = Arrays.divOf(2)
            for (const result of fn(nums)) {
                expect(isErr(result)).toBe(true)
            }
        });
    });

    describe('#tuple', () => {
        it('size is divisor array len', () => {
            const nums = [ ...originalNums ]
            const fn = Arrays.tuple(2)
            expect(fn(nums)).toEqual([
                [Some(1), Some(2)],
                [Some(3), Some(4)]
            ]);
            expect(nums).toEqual(originalNums);
        });

        it('size is not divisor array len', () => {
            const nums = [ ...originalNums ]
            const fn = Arrays.tuple(3)
            expect(fn(nums)).toEqual([
                [Some(1), Some(2), Some(3)],
                [Some(4), None(), None()]
            ]);
            expect(nums).toEqual(originalNums);
        });

        it('size > array len', () => {
            const nums = [ ...originalNums ]
            const fn = Arrays.tuple(5)
            expect(fn(nums)).toEqual([
                [Some(1), Some(2), Some(3), Some(4), None()]
            ]);
            expect(nums).toEqual(originalNums);
        });
    });

    it('#flat', () => {
        const nums = [[ ...originalNums ]]
        const fn = Arrays.flat()
        expect(fn(nums)).toEqual(originalNums);
    });

    it('#flatMap', () => {
        const nums = [[ ...originalNums ]]
        const fn = Arrays.flatMap((it: number[]) => it)
        expect(fn(nums)).toEqual(originalNums);
    });

    describe('#first', () => {
        it('empty array', () => {
            const nums = []
            const fn = Arrays.first()
            expect(fn(nums)).toEqual(None());
        });

        it('non-empty array', () => {
            const nums = [ ...originalNums ]
            const fn = Arrays.first()
            expect(fn(nums)).toEqual(Some(originalNums[0]));
            expect(nums).toEqual(originalNums);
        });
    });

    describe('#last', () => {
        it('empty array', () => {
            const nums = []
            const fn = Arrays.last()
            expect(fn(nums)).toEqual(None());
        });

        it('non-empty array', () => {
            const nums = [ ...originalNums ]
            const fn = Arrays.last()
            expect(fn(nums)).toEqual(Some(originalNums.at(-1)));
            expect(nums).toEqual(originalNums);
        });
    });

    it('#append', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.append(2)
        expect(fn(nums)).toEqual([1,2,3,4,2]);
        expect(nums).toEqual(originalNums);
    });

    it('#prepend', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.prepend(2)
        expect(fn(nums)).toEqual([2,1,2,3,4]);
        expect(nums).toEqual(originalNums);
    });

    it('#reverse', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.reverse()
        expect(fn(nums)).toEqual([4,3,2,1]);
        expect(nums).toEqual(originalNums);
    });

    it('#between', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.between(1, 4)
        expect(fn(nums)).toEqual([2, 3]);
        expect(nums).toEqual(originalNums);
    });

    it('#betweenEq', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.betweenEq(2, 3)
        expect(fn(nums)).toEqual([2, 3]);
        expect(nums).toEqual(originalNums);
    });

    it('#gt', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.gt(3)
        expect(fn(nums)).toEqual([4]);
        expect(nums).toEqual(originalNums);
    });

    it('#gte', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.gte(3)
        expect(fn(nums)).toEqual([3, 4]);
        expect(nums).toEqual(originalNums);
    });

    it('#lte', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.lte(2)
        expect(fn(nums)).toEqual([1, 2]);
        expect(nums).toEqual(originalNums);
    });

    it('#lt', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.lt(2)
        expect(fn(nums)).toEqual([1]);
        expect(nums).toEqual(originalNums);
    });

    it('#debug', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.debug('test')
        expect(fn(nums)).toEqual(nums);
        expect(nums).toEqual(originalNums);
    });

    it('#shiftl', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.shiftl(2)
        expect(fn(nums)).toEqual([3,4,1,2]);
        expect(nums).toEqual(originalNums);
    });

    it('#shiftr', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.shiftr(3)
        expect(fn(nums)).toEqual([2,3,4,1]);
        expect(nums).toEqual(originalNums);
    });

    describe('#sort', () => {
        it('numbers asc', () => {
            const nums = [ ...originalNums, -1 ]
            const fn = Arrays.sort<number>(Arrays.sorter.asc)
            expect(fn(nums)).toEqual([-1, 1, 2, 3, 4]);
            expect(nums).toEqual([...originalNums, -1]);
        })

        it('numbers desc', () => {
            const nums = [ ...originalNums, -1 ]
            const fn = Arrays.sort<number>(Arrays.sorter.desc)
            expect(fn(nums)).toEqual([4, 3, 2, 1, -1]);
            expect(nums).toEqual([...originalNums, -1]);
        })

        it('strings asc', () => {
            const nums = [ ...originalNums.map(String), 'aa', 'a' ]
            const fn = Arrays.sort<string>(Arrays.sorter.asc)
            expect(fn(nums)).toEqual(['1', '2', '3', '4', 'a', 'aa']);
            expect(nums).toEqual([ ...originalNums.map(String), 'aa', 'a' ]);
        })

        it('strings desc', () => {
            const nums = [ ...originalNums.map(String), 'aa', 'a' ]
            const fn = Arrays.sort<string>(Arrays.sorter.desc)
            expect(fn(nums)).toEqual(['1', '2', '3', '4', 'a', 'aa'].reverse());
            expect(nums).toEqual([ ...originalNums.map(String), 'aa', 'a' ]);
        })

        it('booleans asc', () => {
            const nums = [...[false, true, true, false]]
            const fn = Arrays.sort<boolean>(Arrays.sorter.asc)
            expect(fn(nums)).toEqual([false, false, true, true]);
            expect(nums).toEqual([...[false, true, true, false]]);
        })

        it('booleans desc', () => {
            const nums = [...[false, true, true, false]]
            const fn = Arrays.sort<boolean>(Arrays.sorter.desc)
            expect(fn(nums)).toEqual([false, false, true, true].reverse());
            expect(nums).toEqual([...[false, true, true, false]]);
        })

        it('default is ASC', () => {
            const nums = [ ...originalNums, -1 ]
            const fn = Arrays.sort<number>()
            expect(fn(nums)).toEqual([-1, 1, 2, 3, 4]);
            expect(nums).toEqual([...originalNums, -1]);
        })
    })

    it('#concat', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.concat([5, 6])
        expect(fn(nums)).toEqual([1,2,3,4,5,6]);
        expect(nums).toEqual(originalNums);
    })

    it('#toObject', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.toObject<number>((el, idx) => `${el}-${idx}`);
        expect(fn(nums)).toEqual({
            '1-0': 1,
            '2-1': 2,
            '3-2': 3,
            '4-3': 4
        });
        expect(nums).toEqual(originalNums);
    })

    it('#fromObject', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.fromObject<number>(key => Number(key[0]));
        expect(fn({
            '1-0': 1,
            '2-1': 2,
            '3-2': 3,
            '4-3': 4
        })).toEqual(nums);
        expect(nums).toEqual(originalNums);
    })

    it('#unique', () => {
        const nums = [ ...originalNums, ...originalNums ]
        const fn = Arrays.unique<number>()
        expect(fn(nums)).toEqual(originalNums);
        expect(nums).toEqual([ ...originalNums, ...originalNums ]);
    })

    it('#uniqueBy', () => {
        const nums = [ ...originalNums ]
        const fn = Arrays.uniqueBy<number>((a, b) => Boolean(a) === Boolean(b))
        expect(fn(nums)).toEqual([1]);
        expect(nums).toEqual(originalNums);
    })
});