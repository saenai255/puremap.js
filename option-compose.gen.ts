import Compose from "./compose";
import Options, { Option } from "./option";

type PipeFn<In, Out> = (it: In) => Out;

export function optionCompose<T0, T1, T2> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
): (input: Option<T0>) => Option<T2>

export function optionCompose<T0, T1, T2, T3> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
): (input: Option<T0>) => Option<T3>

export function optionCompose<T0, T1, T2, T3, T4> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
): (input: Option<T0>) => Option<T4>

export function optionCompose<T0, T1, T2, T3, T4, T5> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
): (input: Option<T0>) => Option<T5>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
): (input: Option<T0>) => Option<T6>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
): (input: Option<T0>) => Option<T7>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
): (input: Option<T0>) => Option<T8>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9> (
    fn0: PipeFn<T0, T1>,
    fn1: PipeFn<T1, T2>,
    fn2: PipeFn<T2, T3>,
    fn3: PipeFn<T3, T4>,
    fn4: PipeFn<T4, T5>,
    fn5: PipeFn<T5, T6>,
    fn6: PipeFn<T6, T7>,
    fn7: PipeFn<T7, T8>,
    fn8: PipeFn<T8, T9>,
): (input: Option<T0>) => Option<T9>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> (
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
): (input: Option<T0>) => Option<T10>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> (
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
): (input: Option<T0>) => Option<T11>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> (
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
): (input: Option<T0>) => Option<T12>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> (
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
): (input: Option<T0>) => Option<T13>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> (
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
): (input: Option<T0>) => Option<T14>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> (
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
): (input: Option<T0>) => Option<T15>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> (
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
): (input: Option<T0>) => Option<T16>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> (
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
): (input: Option<T0>) => Option<T17>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> (
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
): (input: Option<T0>) => Option<T18>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> (
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
): (input: Option<T0>) => Option<T19>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> (
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
): (input: Option<T0>) => Option<T20>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21> (
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
): (input: Option<T0>) => Option<T21>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22> (
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
): (input: Option<T0>) => Option<T22>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23> (
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
): (input: Option<T0>) => Option<T23>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24> (
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
): (input: Option<T0>) => Option<T24>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25> (
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
): (input: Option<T0>) => Option<T25>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26> (
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
): (input: Option<T0>) => Option<T26>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27> (
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
): (input: Option<T0>) => Option<T27>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28> (
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
): (input: Option<T0>) => Option<T28>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29> (
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
): (input: Option<T0>) => Option<T29>

export function optionCompose<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30> (
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
): (input: Option<T0>) => Option<T30>


export function optionCompose(...fns: any[]) {
    return Options.map((Compose.$ as any)(...fns));
}
