import { Result } from "./result";
declare type PipeFn<In, Out> = (it: In) => Out;
export declare function okCompose<T0, T1, T2>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>): (input: Result<T0>) => Result<T2>;
export declare function okCompose<T0, T1, T2, T3>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>): (input: Result<T0>) => Result<T3>;
export declare function okCompose<T0, T1, T2, T3, T4>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>): (input: Result<T0>) => Result<T4>;
export declare function okCompose<T0, T1, T2, T3, T4, T5>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>): (input: Result<T0>) => Result<T5>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>): (input: Result<T0>) => Result<T6>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>): (input: Result<T0>) => Result<T7>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>): (input: Result<T0>) => Result<T8>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>): (input: Result<T0>) => Result<T9>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>): (input: Result<T0>) => Result<T10>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>): (input: Result<T0>) => Result<T11>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>): (input: Result<T0>) => Result<T12>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>): (input: Result<T0>) => Result<T13>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>): (input: Result<T0>) => Result<T14>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>): (input: Result<T0>) => Result<T15>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>): (input: Result<T0>) => Result<T16>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>): (input: Result<T0>) => Result<T17>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>): (input: Result<T0>) => Result<T18>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>): (input: Result<T0>) => Result<T19>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>): (input: Result<T0>) => Result<T20>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>, fn20: PipeFn<T20, T21>): (input: Result<T0>) => Result<T21>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>, fn20: PipeFn<T20, T21>, fn21: PipeFn<T21, T22>): (input: Result<T0>) => Result<T22>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>, fn20: PipeFn<T20, T21>, fn21: PipeFn<T21, T22>, fn22: PipeFn<T22, T23>): (input: Result<T0>) => Result<T23>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>, fn20: PipeFn<T20, T21>, fn21: PipeFn<T21, T22>, fn22: PipeFn<T22, T23>, fn23: PipeFn<T23, T24>): (input: Result<T0>) => Result<T24>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>, fn20: PipeFn<T20, T21>, fn21: PipeFn<T21, T22>, fn22: PipeFn<T22, T23>, fn23: PipeFn<T23, T24>, fn24: PipeFn<T24, T25>): (input: Result<T0>) => Result<T25>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>, fn20: PipeFn<T20, T21>, fn21: PipeFn<T21, T22>, fn22: PipeFn<T22, T23>, fn23: PipeFn<T23, T24>, fn24: PipeFn<T24, T25>, fn25: PipeFn<T25, T26>): (input: Result<T0>) => Result<T26>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>, fn20: PipeFn<T20, T21>, fn21: PipeFn<T21, T22>, fn22: PipeFn<T22, T23>, fn23: PipeFn<T23, T24>, fn24: PipeFn<T24, T25>, fn25: PipeFn<T25, T26>, fn26: PipeFn<T26, T27>): (input: Result<T0>) => Result<T27>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>, fn20: PipeFn<T20, T21>, fn21: PipeFn<T21, T22>, fn22: PipeFn<T22, T23>, fn23: PipeFn<T23, T24>, fn24: PipeFn<T24, T25>, fn25: PipeFn<T25, T26>, fn26: PipeFn<T26, T27>, fn27: PipeFn<T27, T28>): (input: Result<T0>) => Result<T28>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>, fn20: PipeFn<T20, T21>, fn21: PipeFn<T21, T22>, fn22: PipeFn<T22, T23>, fn23: PipeFn<T23, T24>, fn24: PipeFn<T24, T25>, fn25: PipeFn<T25, T26>, fn26: PipeFn<T26, T27>, fn27: PipeFn<T27, T28>, fn28: PipeFn<T28, T29>): (input: Result<T0>) => Result<T29>;
export declare function okCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30>(fn0: PipeFn<T0, T1>, fn1: PipeFn<T1, T2>, fn2: PipeFn<T2, T3>, fn3: PipeFn<T3, T4>, fn4: PipeFn<T4, T5>, fn5: PipeFn<T5, T6>, fn6: PipeFn<T6, T7>, fn7: PipeFn<T7, T8>, fn8: PipeFn<T8, T9>, fn9: PipeFn<T9, T10>, fn10: PipeFn<T10, T11>, fn11: PipeFn<T11, T12>, fn12: PipeFn<T12, T13>, fn13: PipeFn<T13, T14>, fn14: PipeFn<T14, T15>, fn15: PipeFn<T15, T16>, fn16: PipeFn<T16, T17>, fn17: PipeFn<T17, T18>, fn18: PipeFn<T18, T19>, fn19: PipeFn<T19, T20>, fn20: PipeFn<T20, T21>, fn21: PipeFn<T21, T22>, fn22: PipeFn<T22, T23>, fn23: PipeFn<T23, T24>, fn24: PipeFn<T24, T25>, fn25: PipeFn<T25, T26>, fn26: PipeFn<T26, T27>, fn27: PipeFn<T27, T28>, fn28: PipeFn<T28, T29>, fn29: PipeFn<T29, T30>): (input: Result<T0>) => Result<T30>;
export {};
