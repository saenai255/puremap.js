import { optionCompose } from "./option-compose.gen";
declare const optionTag: unique symbol;
declare const noneTag: unique symbol;
declare const someTag: unique symbol;
export declare class OptionUnwrapError extends Error {
}
export declare type Option$None = {
    readonly [optionTag]: typeof noneTag;
};
export declare type Option$Some<T> = {
    readonly [optionTag]: typeof someTag;
    readonly [someTag]: T;
};
export declare type Option<T> = Option$None | Option$Some<T>;
export declare const isSome: <T>(option: Option<T | Option<T>>) => option is Option$Some<T>;
export declare const isNone: <T>(option: Option<T | Option<T>>) => option is Option$None;
export declare const None: <T>() => Option<T>;
export declare function Some<T>(value: T | Option<T>): Option<T>;
interface ToOptionArgs {
    allowUndefined?: boolean;
    allowNull?: boolean;
}
declare function map<T, E>(mapper: (it: T) => E | Option<E>): (it: Option<T>) => Option<E>;
declare const Options: {
    map: typeof map;
    of: <T>(obj: T, opts?: ToOptionArgs) => Option<T>;
    unwrap: <T_1>(option: Option<T_1>) => T_1;
    get: <T_2>(some: Option$Some<T_2>) => T_2;
    $: typeof optionCompose;
};
export default Options;
