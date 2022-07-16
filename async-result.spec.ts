import AsyncResults, { isAsyncErr, isAsyncOk } from './async-result';
process.stdout.write('started\n')

describe('AsyncResult', () => {
    describe('#mapAsyncResult', () => {
        it('resolves correctly', () => {
            const pIntFn = () => Promise.resolve(5);
            const arInt = AsyncResults.of(pIntFn);
            let arTen = arInt;
            for (let i = 0; i < 5; i++) {
                arTen = AsyncResults.map((it: number) => it + 1)(arTen)
            }
    
            let pTen = AsyncResults.unwrap(arTen)
            expect(pTen).resolves.toBe(10);
        })
    
        it('rejects correctly', async () => {
            const pIntFn = () => Promise.reject(5);
            const arInt = AsyncResults.of(pIntFn);
            let arTen = arInt;
            for (let i = 0; i < 4; i++) {
                arTen = AsyncResults.map((it: number) => it + 1)(arTen)
            }
    
            expect(AsyncResults.unwrap(arTen)).rejects.toEqual(5)
        })
    })

    describe('#toAsyncResult', () => {
        it('return Err on reject', () => {
            const pIntFn = () => Promise.reject(5);
            const arInt = AsyncResults.of(pIntFn);
    
            expect(AsyncResults.unwrap(arInt)).rejects.toEqual(5)
        })

        it('return Ok on resolve', () => {
            const pIntFn = () => Promise.resolve(5);
            const arInt = AsyncResults.of(pIntFn);
    
            expect(AsyncResults.unwrap(arInt)).resolves.toEqual(5)
        })
    })

    it('#isAsyncResultOk, #isAsyncResultErr', () => {
        const err = AsyncResults.of(() => Promise.reject(5) as Promise<number>);
        const ok = AsyncResults.of(() => Promise.resolve(5));

        expect(isAsyncErr()(ok).then(it => it[0])).resolves.toBe(false)
        expect(isAsyncErr()(err).then(it => it[0])).resolves.toBe(true)
        expect(isAsyncOk()(ok).then(it => it[0])).resolves.toBe(true)
        expect(isAsyncOk()(err).then(it => it[0])).resolves.toBe(false)
    })
})