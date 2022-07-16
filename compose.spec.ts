import Arrays from "./array";
import Compose from "./compose"

describe('#compose', () => {
    it('trial #1', () => {
        const mapper = Compose.$(
            (it: number) => it * 2,
            it => it + '_xx',
            () => 'true',
            Boolean
        );

        expect(mapper(5)).toEqual(true);
    })

    it('trial #2', () => {
        const mapper = Compose.$(
            (it: number) => it * 2,
            it => it < 5
        );

        expect(mapper(5)).toEqual(false);
    })

    it('trial #3', () => {
        const mapper = Compose.$(
            Arrays.map((it: number) => it * 2),
            Arrays.every(it => it > 5)
        );

        expect(mapper([3, 4])).toEqual(true);
    })
})