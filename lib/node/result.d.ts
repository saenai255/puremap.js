import { errCompose } from "./result-err-compose.gen";
import { okCompose } from "./result-ok-compose.gen";
declare const resultTag: unique symbol;
declare const errorTag: unique symbol;
declare const okTag: unique symbol;
export declare class ResultUnwrapError extends Error {
    uncaught: any;
    constructor(uncaught: any, message?: string);
}
export declare type Result$Error<T, E> = {
    readonly [resultTag]: typeof errorTag;
    readonly [errorTag]: E;
};
export declare type Result$Ok<T, E> = {
    readonly [resultTag]: typeof okTag;
    readonly [okTag]: T;
};
export declare type Result<T, E = Error> = Result$Error<T, E> | Result$Ok<T, E>;
export declare const Err: <T, E = Error>(e: E) => Result<T, E>;
export declare const Ok: <T, E = Error>(value: T) => Result<T, E>;
export declare const isOk: <T, E>(result: Result<T, E>) => result is Result$Ok<T, E>;
export declare const isErr: <T, E>(result: Result<T, E>) => result is Result$Error<T, E>;
declare function map<O1, O2, E>(mapper: (it: O1) => O2): (it: Result<O1, E>) => Result<O2, E>;
declare function mapErr<O, E1, E2>(mapper: (it: E1) => E2): (it: Result<O, E1>) => Result<O, E2>;
declare const Results: {
    unwrap: <T, E>() => (result: Result<T, E>) => T;
    getOk: <T_1, E_1>() => (ok: Result$Ok<T_1, E_1>) => T_1;
    getErr: <T_2, E_2>() => (err: Result$Error<T_2, E_2>) => E_2;
    of: <T_3, E_3 = Error>(fn: () => T_3) => Result<T_3, E_3>;
    map: typeof map;
    mapErr: typeof mapErr;
    $: typeof okCompose;
    $Err: typeof errCompose;
    merge: <T_4>() => (either: Result<T_4, T_4>) => T_4;
};
export default Results;
