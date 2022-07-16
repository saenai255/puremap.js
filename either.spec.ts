import Eithers, { Left, Right } from "./either";

describe('Either', () => {
    describe('#merge', () => {
        it('of left', () => {
            const left = Left<number, number>(5);
            const value = Eithers.merge<number>()(left)

            expect(value).toEqual(5);
        })

        it('of right', () => {
            const right = Right<number, number>(5);
            const value = Eithers.merge<number>()(right)

            expect(value).toEqual(5);
        })
    })
})