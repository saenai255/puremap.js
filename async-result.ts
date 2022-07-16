import { asyncResultErrCompose } from "./async-result-err-compose.gen";
import { asyncResultOkCompose } from "./async-result-ok-compose.gen";
import Observer from "./observer";

const resultTag = Symbol('async-result');
const errorTag = Symbol('error');
const okTag = Symbol('ok');

export class AsyncResultUnwrapError extends Error {
    constructor(private uncaught: any, message?: string) {
        super(message);
    }
}

export type AsyncResult$Error<_T, E> = {
    readonly [resultTag]: {
        done: boolean;
        observer: Observer;
        [errorTag]?: E
    };
};
export type AsyncResult$Ok<T, _E> = {
    readonly [resultTag]: {
        done: boolean;
        observer: Observer;
        [okTag]?: T;
    };
};

export type AsyncResult<T, E = Error> = AsyncResult$Error<T, E> | AsyncResult$Ok<T, E>

export const AsyncErr = <T, E = Error>(error?: E): AsyncResult<T, E> => {
    const err = {
        [resultTag]: {
            done: false,
            observer: Observer.nextLoop(() => {
                err[resultTag][errorTag] = error;
                err[resultTag].done = true;
            })
        }
    }

    return err
}

export const AsyncOk = <T, E = Error>(value: T): AsyncResult<T, E> => {
    const ok = {
        [resultTag]: {
            done: false,
            observer: Observer.nextLoop(() => {
                ok[resultTag][okTag] = value;
                ok[resultTag].done = true;
            })
        }
    }

    return ok
}

export const isAsyncOk = <T, E>() => (result: AsyncResult<T, E>): Promise<[true, AsyncResult$Ok<T, E>] | [false, AsyncResult$Error<T, E>]> => {
    if (typeof result !== 'object' || !(resultTag in result)) {
        return Promise.reject(new Error(`Given parameter ${result} is not a valid AsyncResult`));
    }

    return new Promise(resolve => {
        result[resultTag].observer.once(() => {
            const isOk = okTag in result[resultTag]
            resolve([isOk, result])
        });
    });
}

export const isAsyncErr = () => <T, E>(result: AsyncResult<T, E>): Promise<[true, AsyncResult$Error<T, E>] | [false, AsyncResult$Ok<T, E>]> => {
    if (typeof result !== 'object' || !(resultTag in result)) {
        return Promise.reject(new Error(`Given parameter ${result} is not a valid AsyncResult`));
    }

    return new Promise(resolve => {
        result[resultTag].observer.once(() => {
            const isErr = errorTag in result[resultTag]
            resolve([isErr, result])
        });
    });
}

/**
 * @unsafe
 * @throws
 */
const unwrap =  async <T, E>(result: AsyncResult<T, E>): Promise<T> => {
    const [isOk, res] = await isAsyncOk()(result);
    if (isOk) {
        return res[resultTag][okTag] as T;
    } else {
        return Promise.reject(res[resultTag][errorTag]);
    }
}

/**
 * @unsafe
 * @throws
 */
const unwrapErr =  async <T, E>(result: AsyncResult<T, E>): Promise<E> => {
    const [isErr, res] = await isAsyncErr()(result);
    if (isErr) {
        return res[resultTag][errorTag] as E;
    } else {
        return Promise.reject(res[resultTag][okTag]);
    }
}

const getAsyncOk = <T, E>(ok: AsyncResult$Ok<T, E>): Promise<T> => unwrap(ok);
const getAsyncErr = <T, E>(err: AsyncResult$Error<T, E>): Promise<E> => unwrapErr(err);
const toAsyncResult = <T, E = Error>(fn: () => Promise<T>): AsyncResult<T, E> => {
    const res = {
        [resultTag]: {
            done: false,
            observer: new Observer()
        }
    }

    fn().then(ok => {
        res[resultTag][okTag] = ok
    }).catch(err => {
        res[resultTag][errorTag] = err
    }).finally(() => {
        res[resultTag].done = true;
        res[resultTag].observer.fire()
    })

    return res;
}

function map<O1, E, O2>(mapper: (it: O1) => O2 | AsyncResult<O2, E>): (it: AsyncResult<O1, E>) => AsyncResult<O2, E> {
    return (res: AsyncResult<O1, E>): AsyncResult<O2, E> => {
        const r = res[resultTag];
        const out = {
            [resultTag]: {
                done: false,
                observer: new Observer()
            }
        }

        r.observer.once(() => {
            if (okTag in r) {
                try {
                    const mappedResult = mapper(r[okTag]);

                    if (typeof mappedResult === "object" && resultTag in mappedResult) {
                        mappedResult[resultTag].observer.once(() => {
                            if (okTag in mappedResult[resultTag]) {
                                out[resultTag][okTag] = mappedResult[resultTag][okTag];
                            } else {
                                out[resultTag][errorTag] = mappedResult[resultTag][errorTag];
                            }

                            out[resultTag].done = true;
                            out[resultTag].observer.fire();
                        })
                    } else {
                        out[resultTag][okTag] = mappedResult;
                        out[resultTag].done = true;
                        out[resultTag].observer.fire();
                    }

                } catch(e) {
                    out[resultTag][errorTag] = e;
                    out[resultTag].done = true;
                    out[resultTag].observer.fire();
                }
            } else {
                out[resultTag][errorTag] = r[errorTag];
                out[resultTag].done = true;
                out[resultTag].observer.fire();
            }
        })

        return out;
    }
}

function mapErr<O, E1, E2>(mapper: (it: E1) => E2 | AsyncResult<O, E2>): (it: AsyncResult<O, E1>) => AsyncResult<O, E2> {
    return (res: AsyncResult<O, E1>): AsyncResult<O, E2> => {
        const r = res[resultTag];
        const out = {
            [resultTag]: {
                done: false,
                observer: new Observer()
            }
        }

        r.observer.once(() => {
            if (errorTag in r) {
                try {
                    const mappedResult = mapper(r[errorTag]);

                    if (typeof mappedResult === "object" && resultTag in mappedResult) {
                        mappedResult[resultTag].observer.once(() => {
                            if (errorTag in mappedResult[resultTag]) {
                                out[resultTag][errorTag] = mappedResult[resultTag][errorTag];
                            } else {
                                out[resultTag][okTag] = mappedResult[resultTag][okTag];
                            }

                            out[resultTag].done = true;
                            out[resultTag].observer.fire();
                        })
                    } else {
                        out[resultTag][errorTag] = mappedResult;
                        out[resultTag].done = true;
                        out[resultTag].observer.fire();
                    }

                } catch(e) {
                    out[resultTag][okTag] = r[okTag];
                    out[resultTag].done = true;
                    out[resultTag].observer.fire();
                }
            } else {
                out[resultTag][okTag] = r[okTag];
                out[resultTag].done = true;
                out[resultTag].observer.fire();
            }
        })

        return out;
    }
}

const merge = <T>() => (it: AsyncResult<T, T>) => new Promise<T>(async resolve => {
    if (await isAsyncOk<T, T>()(it)) {
        it[resultTag].observer.once(() => resolve(it[resultTag][okTag]))
    } else {
        it[resultTag].observer.once(() => resolve(it[resultTag][errorTag]))
    }
})

const AsyncResults = {
    map,
    mapErr,
    of: toAsyncResult,
    getAsyncOk,
    getAsyncErr,
    unwrap,
    $: asyncResultOkCompose,
    $AsyncErr: asyncResultErrCompose,
    merge
}

export default AsyncResults