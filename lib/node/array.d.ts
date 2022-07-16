import { Option } from "./option";
declare type PrimitiveType<T> = T extends number ? number : T extends string ? string : T extends boolean ? boolean : never;
declare type Indexable = number | string | symbol;
declare const Arrays: {
    map: <T, E>(fn: (elem: T, idx: number, array: readonly T[]) => E) => (array: T[]) => E[];
    filter: <T_1>(fn: (elem: T_1, idx: number, array: readonly T_1[]) => boolean) => (array: T_1[]) => T_1[];
    find: <T_2>(fn: (elem: T_2, idx: number, array: readonly T_2[]) => boolean) => (array: T_2[]) => Option<T_2>;
    some: <T_3>(fn: (elem: T_3, idx: number, array: readonly T_3[]) => boolean) => (array: T_3[]) => boolean;
    every: <T_4>(fn: (elem: T_4, idx: number, array: readonly T_4[]) => boolean) => (array: T_4[]) => boolean;
    sort: <T_5>(fn?: (left: T_5, right: T_5) => number, customSort?: (array: T_5[], compare: (left: T_5, right: T_5) => number) => T_5[]) => (array: T_5[]) => T_5[];
    sorter: {
        asc: <T_6>(left: PrimitiveType<T_6>, right: PrimitiveType<T_6>) => number;
        desc: <T_7>(left: PrimitiveType<T_7>, right: PrimitiveType<T_7>) => number;
    };
    append: <T_8>(elem: T_8) => (array: T_8[]) => T_8[];
    debug: <T_9>(prefix?: string) => (array: T_9[]) => T_9[];
    divBy: (divisor: number) => (array: number[]) => (import("./result").Result$Error<unknown, Error> | import("./result").Result$Ok<unknown, Error>)[];
    divOf: (dividend: number) => (array: number[]) => (import("./result").Result$Error<unknown, Error> | import("./result").Result$Ok<unknown, Error>)[];
    first: <T_10>() => (array: T_10[]) => import("./option").Option$None | import("./option").Option$Some<unknown>;
    flat: <T_11>() => (arrayOfArrays: T_11[][]) => T_11[];
    flatMap: <T_12, E_1>(fn: (elem: T_12, idx: number, array: readonly T_12[]) => E_1[]) => (array: T_12[]) => E_1[];
    foldl: <T_13>(fn: (left: T_13, right: T_13) => T_13, defaultValue: T_13) => (array: T_13[]) => T_13;
    foldr: <T_14>(fn: (left: T_14, right: T_14) => T_14, defaultValue: T_14) => (array: T_14[]) => T_14;
    reduce: <T_15, E_2>(fn: (accumulator: E_2, elem: T_15) => E_2, initialValue: E_2) => (array: T_15[]) => E_2;
    reduceRight: <T_16, E_3>(fn: (accumulator: E_3, elem: T_16) => E_3, initialValue: E_3) => (array: T_16[]) => E_3;
    last: <T_17>() => (array: T_17[]) => import("./option").Option$None | import("./option").Option$Some<unknown>;
    prepend: <T_18>(elem: T_18) => (array: T_18[]) => T_18[];
    join: (delimiter?: string) => (array: string[]) => string;
    reverse: <T_19>() => (array: T_19[]) => T_19[];
    isEmpty: <T_20>() => (array: T_20[]) => boolean;
    sum: () => (array: number[]) => number;
    product: () => (array: number[]) => number;
    pow: (exp: number) => (array: number[]) => number[];
    powOf: (base: number) => (array: number[]) => number[];
    tuple: <T_21>(size?: number) => (array: T_21[]) => Option<T_21>[][];
    fromString: (delimiter: string) => (str: string) => string[];
    shiftr: <T_22>(by?: number) => ([...array]: T_22[]) => T_22[];
    shiftl: <T_23>(by?: number) => ([...array]: T_23[]) => T_23[];
    concat: <T_24>(otherArray: T_24[]) => (array: T_24[]) => T_24[];
    unique: <T_25>() => (array: PrimitiveType<T_25>[]) => T_25[];
    uniqueBy: <T_26>(eq: (a: T_26, b: T_26) => boolean) => (array: T_26[]) => T_26[];
    between: (greaterThan: number, lowerThan: number) => (array: number[]) => number[];
    betweenEq: (greaterThanEqual: number, lowerThanEqual: number) => (array: number[]) => number[];
    gt: (greaterThan: number) => (array: number[]) => number[];
    lt: (lowerThan: number) => (array: number[]) => number[];
    gte: (greaterThanEqual: number) => (array: number[]) => number[];
    lte: (lowerThanEqual: number) => (array: number[]) => number[];
    toObject: <T_27>(fn?: (elem: T_27, idx: number) => Indexable) => (array: T_27[]) => Record<Indexable, T_27>;
    fromObject: <T_28>(fn: (key: Indexable) => number) => (object: Record<Indexable, T_28>) => T_28[];
};
export default Arrays;
