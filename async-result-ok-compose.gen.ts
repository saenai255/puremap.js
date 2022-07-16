import AsyncResults, { AsyncResult } from "./async-result";
import Compose from "./compose";

type PipeFn<In, Out> = (it: In) => Out;

export function asyncResultOkCompose<E, T0, T1, T2> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
): (input: AsyncResult<T0, E>) => AsyncResult<T2, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
): (input: AsyncResult<T0, E>) => AsyncResult<T3, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
): (input: AsyncResult<T0, E>) => AsyncResult<T4, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
): (input: AsyncResult<T0, E>) => AsyncResult<T5, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
): (input: AsyncResult<T0, E>) => AsyncResult<T6, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
): (input: AsyncResult<T0, E>) => AsyncResult<T7, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
): (input: AsyncResult<T0, E>) => AsyncResult<T8, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
): (input: AsyncResult<T0, E>) => AsyncResult<T9, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T10, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T11, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T12, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T13, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T14, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T15, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T16, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T17, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T18, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T19, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T20, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T21, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T22, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T23, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T24, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T25, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T26, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T27, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T28, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T29, E>

export function asyncResultOkCompose<E, T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30> (
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
): (input: AsyncResult<T0, E>) => AsyncResult<T30, E>


export function asyncResultOkCompose(...fns: any[]) {
    return AsyncResults.map((Compose.$ as any)(...fns));
}
