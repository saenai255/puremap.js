import Results, { isErr, isOk, ResultUnwrapError } from './result';
process.stdout.write('started\n')

const doThrow = <T>(e: T): T => {
    throw e;
}

describe('Result', () => {
    describe('#map', () => {
        it('returns Ok', () => {
            const intFn = () => 5;
            const intResult = Results.of(intFn);
            let resultTen = intResult;
            for (let i = 0; i < 5; i++) {
                resultTen = Results.map<number, number, Error>((it: number) => it + 1)(resultTen)
            }
    
            let pTen = Results.unwrap()(resultTen)
            expect(pTen).toBe(10);
        })
    
        it('returns Err', async () => {
            const intFn = () => doThrow(5);
            const intResult = Results.of(intFn);
            let resultTen = intResult;
            for (let i = 0; i < 4; i++) {
                resultTen = Results.map<number, number, Error>((it: number) => it + 1)(resultTen)
            }
    
            expect(() => Results.unwrap()(resultTen)).toThrow()
        })
    })

    describe('#mapErr', () => {
        it('does not map Ok', () => {
            const intFn = () => 5;
            const intResult = Results.of<number, number>(intFn);
            let resultTen = intResult;
            for (let i = 0; i < 5; i++) {
                resultTen = Results.mapErr<number, number, number>((it: number) => it + 1)(resultTen)
            }
    
            let pTen = Results.unwrap()(resultTen)
            expect(pTen).toBe(5);
        })
    
        it('does map Err', async () => {
            const intFn = () => doThrow('');
            const emptyStringResult = Results.of<string, string>(intFn);
            let fiveXs = emptyStringResult;
            for (let i = 0; i < 5; i++) {
                fiveXs = Results.mapErr<string, string, string>((it: string) => it + 'X')(fiveXs)
            }
    
            expect(() => Results.unwrap()(fiveXs)).toThrowError(new ResultUnwrapError('XXXXX'))
        })
    })

    describe('#of', () => {
        it('return Err on throw', () => {
            const intFn = () => doThrow(5);
            const intResult = Results.of(intFn);
    
            expect(() => Results.unwrap()(intResult)).toThrow()
        })

        it('return Ok', () => {
            const intFn = () => 5;
            const intResult = Results.of(intFn);
    
            expect(Results.unwrap()(intResult)).toEqual(5)
        })
    })

    it('#isOk, #isErr', () => {
        const err = Results.of(() => doThrow(5));
        const ok = Results.of(() => 5);

        expect(isErr(ok)).toBe(false)
        expect(isErr(err)).toBe(true)
        expect(isOk(ok)).toBe(true)
        expect(isOk(err)).toBe(false)
    })

    describe('#merge', () => {
        it('of err', () => {
            const err = Results.of<number, number>(() => doThrow(5));
            const value = Results.merge<number>()(err)

            expect(value).toEqual(5);
        })

        it('of ok', () => {
            const ok = Results.of<number, number>(() => 5);
            const value = Results.merge<number>()(ok)

            expect(value).toEqual(5);
        })
    })
})