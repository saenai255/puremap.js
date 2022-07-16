import { asyncResultErrCompose } from "./async-result-err-compose.gen";
import { asyncResultOkCompose } from "./async-result-ok-compose.gen";
import Observer from "./observer";
declare const resultTag: unique symbol;
declare const errorTag: unique symbol;
declare const okTag: unique symbol;
export declare class AsyncResultUnwrapError extends Error {
    private uncaught;
    constructor(uncaught: any, message?: string);
}
export declare type AsyncResult$Error<_T, E> = {
    readonly [resultTag]: {
        done: boolean;
        observer: Observer;
        [errorTag]?: E;
    };
};
export declare type AsyncResult$Ok<T, _E> = {
    readonly [resultTag]: {
        done: boolean;
        observer: Observer;
        [okTag]?: T;
    };
};
export declare type AsyncResult<T, E = Error> = AsyncResult$Error<T, E> | AsyncResult$Ok<T, E>;
export declare const AsyncErr: <T, E = Error>(error?: E) => AsyncResult<T, E>;
export declare const AsyncOk: <T, E = Error>(value: T) => AsyncResult<T, E>;
export declare const isAsyncOk: <T, E>() => (result: AsyncResult<T, E>) => Promise<[true, AsyncResult$Ok<T, E>] | [false, AsyncResult$Error<T, E>]>;
export declare const isAsyncErr: () => <T, E>(result: AsyncResult<T, E>) => Promise<[true, AsyncResult$Error<T, E>] | [false, AsyncResult$Ok<T, E>]>;
declare function map<O1, E, O2>(mapper: (it: O1) => O2 | AsyncResult<O2, E>): (it: AsyncResult<O1, E>) => AsyncResult<O2, E>;
declare function mapErr<O, E1, E2>(mapper: (it: E1) => E2 | AsyncResult<O, E2>): (it: AsyncResult<O, E1>) => AsyncResult<O, E2>;
declare const AsyncResults: {
    map: typeof map;
    mapErr: typeof mapErr;
    of: <T, E = Error>(fn: () => Promise<T>) => AsyncResult<T, E>;
    getAsyncOk: <T_1, E_1>(ok: AsyncResult$Ok<T_1, E_1>) => Promise<T_1>;
    getAsyncErr: <T_2, E_2>(err: AsyncResult$Error<T_2, E_2>) => Promise<E_2>;
    unwrap: <T_3, E_3>(result: AsyncResult<T_3, E_3>) => Promise<T_3>;
    $: typeof asyncResultOkCompose;
    $AsyncErr: typeof asyncResultErrCompose;
    merge: <T_4>() => (it: AsyncResult<T_4, T_4>) => Promise<T_4>;
};
export default AsyncResults;
