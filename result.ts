import { errCompose } from "./result-err-compose.gen";
import { okCompose } from "./result-ok-compose.gen";

const resultTag = Symbol('result');
const errorTag = Symbol('error');
const okTag = Symbol('ok');

export class ResultUnwrapError extends Error {
    constructor(public uncaught: any, message?: string) {
        super(message);
    }
}

export type Result$Error<T, E> = {
    readonly [resultTag]: typeof errorTag
    readonly [errorTag]: E;
};
export type Result$Ok<T, E> = {
    readonly [resultTag]: typeof okTag;
    readonly [okTag]: T;
};

export type Result<T, E = Error> = Result$Error<T, E> | Result$Ok<T, E>

export const Err = <T, E = Error>(e: E): Result<T, E> => ({
    [resultTag]: errorTag,
    [errorTag]: e
});

export const Ok = <T, E = Error>(value: T): Result<T, E> => ({
    [resultTag]: okTag,
    [okTag]: value
});

export const isOk = <T, E>(result: Result<T, E>): result is Result$Ok<T, E> => resultTag in result && result[resultTag] === okTag
export const isErr = <T, E>(result: Result<T, E>): result is Result$Error<T, E> => resultTag in result && result[resultTag] === errorTag

/**
 * @unsafe
 * @throws
 */
 const unwrap = <T, E>() => (result: Result<T, E>): T => isOk(result) ? result[okTag] : (() => {
    throw new ResultUnwrapError(result[errorTag]);
})();

/**
 * @unsafe
 * @throws
 */
const unwrapErr = <T, E>() => (result: Result<T, E>): E => isErr(result) ? result[errorTag] : (() => {
    throw new ResultUnwrapError(result[okTag]);
})();

const fromOk = <T, E>() => (ok: Result$Ok<T, E>): T => unwrap<T, E>()(ok);
const fromErr = <T, E>() => (err: Result$Error<T, E>): E => unwrapErr<T, E>()(err);
const toResult = <T, E = Error>(fn: () => T): Result<T, E> => {
    try {
        return Ok(fn())
    } catch(e) {
        return Err(e)
    }
}

function map<O1, O2, E>(mapper: (it: O1) => O2): (it: Result<O1, E>) => Result<O2, E>{
    return (res: Result<O1, E>) => {
        if (isOk(res)) {
            return toResult(() => mapper(fromOk<O1, E>()(res)))
        }
    
        return Err(res[errorTag])
    }
}

function mapErr<O, E1, E2>(mapper: (it: E1) => E2): (it: Result<O, E1>) => Result<O, E2>{
    return (res: Result<O, E1>) => {
        if (isErr(res)) {
            return Err(mapper(fromErr<O, E1>()(res)))
        }
    
        return res
    }
}

const merge = <T>() => (either: Result<T, T>): T => {
    if (isOk(either)) {
        return fromOk<T, T>()(either)
    } else {
        return fromErr<T, T>()(either)
    }
}

const Results = {
    unwrap,
    getOk: fromOk,
    getErr: fromErr,
    of: toResult,
    map,
    mapErr,
    $: okCompose,
    $Err: errCompose,
    merge
}

export default Results