import Compose from "./compose";
import Eithers, { Either } from "./either";

type PipeFn<In, Out> = (it: In) => Out;

export function leftCompose<R, T0, T1, T2> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
): (input: Either<T0, R>) => Either<T2, R>

export function leftCompose<R, T0, T1, T2, T3> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
): (input: Either<T0, R>) => Either<T3, R>

export function leftCompose<R, T0, T1, T2, T3, T4> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
): (input: Either<T0, R>) => Either<T4, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
): (input: Either<T0, R>) => Either<T5, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
): (input: Either<T0, R>) => Either<T6, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
): (input: Either<T0, R>) => Either<T7, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
): (input: Either<T0, R>) => Either<T8, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
): (input: Either<T0, R>) => Either<T9, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
): (input: Either<T0, R>) => Either<T10, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
): (input: Either<T0, R>) => Either<T11, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
): (input: Either<T0, R>) => Either<T12, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
): (input: Either<T0, R>) => Either<T13, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
): (input: Either<T0, R>) => Either<T14, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
): (input: Either<T0, R>) => Either<T15, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
): (input: Either<T0, R>) => Either<T16, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
): (input: Either<T0, R>) => Either<T17, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
): (input: Either<T0, R>) => Either<T18, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
): (input: Either<T0, R>) => Either<T19, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
): (input: Either<T0, R>) => Either<T20, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
    fn20: PipeFn<T20, T21>,
): (input: Either<T0, R>) => Either<T21, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
    fn20: PipeFn<T20, T21>,
    fn21: PipeFn<T21, T22>,
): (input: Either<T0, R>) => Either<T22, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
    fn20: PipeFn<T20, T21>,
    fn21: PipeFn<T21, T22>,
    fn22: PipeFn<T22, T23>,
): (input: Either<T0, R>) => Either<T23, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
    fn20: PipeFn<T20, T21>,
    fn21: PipeFn<T21, T22>,
    fn22: PipeFn<T22, T23>,
    fn23: PipeFn<T23, T24>,
): (input: Either<T0, R>) => Either<T24, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
    fn20: PipeFn<T20, T21>,
    fn21: PipeFn<T21, T22>,
    fn22: PipeFn<T22, T23>,
    fn23: PipeFn<T23, T24>,
    fn24: PipeFn<T24, T25>,
): (input: Either<T0, R>) => Either<T25, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
    fn20: PipeFn<T20, T21>,
    fn21: PipeFn<T21, T22>,
    fn22: PipeFn<T22, T23>,
    fn23: PipeFn<T23, T24>,
    fn24: PipeFn<T24, T25>,
    fn25: PipeFn<T25, T26>,
): (input: Either<T0, R>) => Either<T26, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
    fn20: PipeFn<T20, T21>,
    fn21: PipeFn<T21, T22>,
    fn22: PipeFn<T22, T23>,
    fn23: PipeFn<T23, T24>,
    fn24: PipeFn<T24, T25>,
    fn25: PipeFn<T25, T26>,
    fn26: PipeFn<T26, T27>,
): (input: Either<T0, R>) => Either<T27, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
    fn20: PipeFn<T20, T21>,
    fn21: PipeFn<T21, T22>,
    fn22: PipeFn<T22, T23>,
    fn23: PipeFn<T23, T24>,
    fn24: PipeFn<T24, T25>,
    fn25: PipeFn<T25, T26>,
    fn26: PipeFn<T26, T27>,
    fn27: PipeFn<T27, T28>,
): (input: Either<T0, R>) => Either<T28, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
    fn20: PipeFn<T20, T21>,
    fn21: PipeFn<T21, T22>,
    fn22: PipeFn<T22, T23>,
    fn23: PipeFn<T23, T24>,
    fn24: PipeFn<T24, T25>,
    fn25: PipeFn<T25, T26>,
    fn26: PipeFn<T26, T27>,
    fn27: PipeFn<T27, T28>,
    fn28: PipeFn<T28, T29>,
): (input: Either<T0, R>) => Either<T29, R>

export function leftCompose<R, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
    fn9: PipeFn<T9, T10>,
    fn10: PipeFn<T10, T11>,
    fn11: PipeFn<T11, T12>,
    fn12: PipeFn<T12, T13>,
    fn13: PipeFn<T13, T14>,
    fn14: PipeFn<T14, T15>,
    fn15: PipeFn<T15, T16>,
    fn16: PipeFn<T16, T17>,
    fn17: PipeFn<T17, T18>,
    fn18: PipeFn<T18, T19>,
    fn19: PipeFn<T19, T20>,
    fn20: PipeFn<T20, T21>,
    fn21: PipeFn<T21, T22>,
    fn22: PipeFn<T22, T23>,
    fn23: PipeFn<T23, T24>,
    fn24: PipeFn<T24, T25>,
    fn25: PipeFn<T25, T26>,
    fn26: PipeFn<T26, T27>,
    fn27: PipeFn<T27, T28>,
    fn28: PipeFn<T28, T29>,
    fn29: PipeFn<T29, T30>,
): (input: Either<T0, R>) => Either<T30, R>


export function leftCompose(...fns: any[]) {
    return Eithers.mapLeft((Compose.$ as any)(...fns));
}
