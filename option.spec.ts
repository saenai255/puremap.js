import Options, { isNone, isSome, None, Option$Some, Some, OptionUnwrapError } from './option'

describe('#Some', () => {
    it('Some(Some(Some(5) === Some(5)', () => {
        const optInt = Some(Some(Some(5)));

        expect(Options.unwrap(optInt))
            .toBe(Options.unwrap(Some(5)))
    })
})

describe('#isSome', () => {
    it('returns Option$Some', () => {
        const optInt = Some(10);

        expect(isSome(optInt)).toBe(true)
        expect(isNone(optInt)).toBe(false)
    })
})

describe('#isNone', () => {
    it('returns Option$None', () => {
        const optInt = None<number>();

        expect(isNone(optInt)).toBe(true)
        expect(isSome(optInt)).toBe(false)
    })
})

describe('#fromSome', () => {
    it('happy flow', () => {
        const optInt = Some(10) as Option$Some<number>;

        expect(Options.of(optInt)).toEqual(Some(10));
    })

})

describe('#unwrap', () => {
    it('(Some) returns value', () => {
        const optInt = Some(10)

        expect(Options.unwrap(optInt)).toBe(10);
    })

    it('(None) throws', () => {
        const optInt = None<number>()

        expect(() => Options.unwrap(optInt)).toThrowError(OptionUnwrapError)
    })
})

describe('#map', () => {
    it('2# - Just', () => {
        const optInt = Some(10)
    
        const optIntResult = Options.map((it: number) => it * 2)(optInt);
        expect(Options.unwrap(optIntResult)).toBe(20);
    })
    
    it('2# - None', () => {
        const optInt = None<number>()
    
        const optIntResult = Options.map((it: number) => it * 2)(optInt);
        expect(isNone(optIntResult)).toBe(true)
    })
    
    it('1# - Just', () => {
        const optInt = Some(10)
    
        const mapper = Options.map((it: number) => it * 2);
        expect(mapper instanceof Function).toBe(true)
    
        const optIntResult = mapper(optInt);
        expect(Options.unwrap(optIntResult)).toBe(20);
    });
    
    it('1# - None', () => {
        const optInt = None<number>()
    
        const mapper = Options.map((it: number) => it * 2);
        expect(mapper instanceof Function).toBe(true)
    
        const optIntResult = mapper(optInt);
        expect(isNone(optIntResult)).toBe(true)
    });
})