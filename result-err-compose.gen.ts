import Compose from "./compose";
import Results, { Result } from "./result";

type PipeFn<In, Out> = (it: In) => Out;

export function errCompose<O, T0, T1, T2> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
): (input: Result<O, T0>) => Result<O, T2>

export function errCompose<O, T0, T1, T2, T3> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
): (input: Result<O, T0>) => Result<O, T3>

export function errCompose<O, T0, T1, T2, T3, T4> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
): (input: Result<O, T0>) => Result<O, T4>

export function errCompose<O, T0, T1, T2, T3, T4, T5> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
): (input: Result<O, T0>) => Result<O, T5>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
): (input: Result<O, T0>) => Result<O, T6>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
): (input: Result<O, T0>) => Result<O, T7>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
): (input: Result<O, T0>) => Result<O, T8>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
): (input: Result<O, T0>) => Result<O, T9>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> (
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
): (input: Result<O, T0>) => Result<O, T10>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> (
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
): (input: Result<O, T0>) => Result<O, T11>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> (
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
): (input: Result<O, T0>) => Result<O, T12>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> (
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
): (input: Result<O, T0>) => Result<O, T13>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> (
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
): (input: Result<O, T0>) => Result<O, T14>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> (
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
): (input: Result<O, T0>) => Result<O, T15>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> (
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
): (input: Result<O, T0>) => Result<O, T16>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> (
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
): (input: Result<O, T0>) => Result<O, T17>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> (
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
): (input: Result<O, T0>) => Result<O, T18>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> (
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
): (input: Result<O, T0>) => Result<O, T19>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> (
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
): (input: Result<O, T0>) => Result<O, T20>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21> (
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
): (input: Result<O, T0>) => Result<O, T21>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22> (
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
): (input: Result<O, T0>) => Result<O, T22>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23> (
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
): (input: Result<O, T0>) => Result<O, T23>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24> (
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
): (input: Result<O, T0>) => Result<O, T24>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25> (
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
): (input: Result<O, T0>) => Result<O, T25>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26> (
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
): (input: Result<O, T0>) => Result<O, T26>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27> (
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
): (input: Result<O, T0>) => Result<O, T27>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28> (
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
): (input: Result<O, T0>) => Result<O, T28>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29> (
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
): (input: Result<O, T0>) => Result<O, T29>

export function errCompose<O, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30> (
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
): (input: Result<O, T0>) => Result<O, T30>


export function errCompose(...fns: any[]) {
    return Results.mapErr((Compose.$ as any)(...fns));
}
