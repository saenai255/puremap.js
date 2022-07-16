"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAsyncErr = exports.isAsyncOk = exports.AsyncOk = exports.AsyncErr = exports.AsyncResultUnwrapError = void 0;
const async_result_err_compose_gen_1 = require("./async-result-err-compose.gen");
const async_result_ok_compose_gen_1 = require("./async-result-ok-compose.gen");
const observer_1 = __importDefault(require("./observer"));
const resultTag = Symbol('async-result');
const errorTag = Symbol('error');
const okTag = Symbol('ok');
class AsyncResultUnwrapError extends Error {
    constructor(uncaught, message) {
        super(message);
        this.uncaught = uncaught;
    }
}
exports.AsyncResultUnwrapError = AsyncResultUnwrapError;
const AsyncErr = (error) => {
    const err = {
        [resultTag]: {
            done: false,
            observer: observer_1.default.nextLoop(() => {
                err[resultTag][errorTag] = error;
                err[resultTag].done = true;
            })
        }
    };
    return err;
};
exports.AsyncErr = AsyncErr;
const AsyncOk = (value) => {
    const ok = {
        [resultTag]: {
            done: false,
            observer: observer_1.default.nextLoop(() => {
                ok[resultTag][okTag] = value;
                ok[resultTag].done = true;
            })
        }
    };
    return ok;
};
exports.AsyncOk = AsyncOk;
const isAsyncOk = () => (result) => {
    if (typeof result !== 'object' || !(resultTag in result)) {
        return Promise.reject(new Error(`Given parameter ${result} is not a valid AsyncResult`));
    }
    return new Promise(resolve => {
        result[resultTag].observer.once(() => {
            const isOk = okTag in result[resultTag];
            resolve([isOk, result]);
        });
    });
};
exports.isAsyncOk = isAsyncOk;
const isAsyncErr = () => (result) => {
    if (typeof result !== 'object' || !(resultTag in result)) {
        return Promise.reject(new Error(`Given parameter ${result} is not a valid AsyncResult`));
    }
    return new Promise(resolve => {
        result[resultTag].observer.once(() => {
            const isErr = errorTag in result[resultTag];
            resolve([isErr, result]);
        });
    });
};
exports.isAsyncErr = isAsyncErr;
/**
 * @unsafe
 * @throws
 */
const unwrap = async (result) => {
    const [isOk, res] = await (0, exports.isAsyncOk)()(result);
    if (isOk) {
        return res[resultTag][okTag];
    }
    else {
        return Promise.reject(res[resultTag][errorTag]);
    }
};
/**
 * @unsafe
 * @throws
 */
const unwrapErr = async (result) => {
    const [isErr, res] = await (0, exports.isAsyncErr)()(result);
    if (isErr) {
        return res[resultTag][errorTag];
    }
    else {
        return Promise.reject(res[resultTag][okTag]);
    }
};
const getAsyncOk = (ok) => unwrap(ok);
const getAsyncErr = (err) => unwrapErr(err);
const toAsyncResult = (fn) => {
    const res = {
        [resultTag]: {
            done: false,
            observer: new observer_1.default()
        }
    };
    fn().then(ok => {
        res[resultTag][okTag] = ok;
    }).catch(err => {
        res[resultTag][errorTag] = err;
    }).finally(() => {
        res[resultTag].done = true;
        res[resultTag].observer.fire();
    });
    return res;
};
function map(mapper) {
    return (res) => {
        const r = res[resultTag];
        const out = {
            [resultTag]: {
                done: false,
                observer: new observer_1.default()
            }
        };
        r.observer.once(() => {
            if (okTag in r) {
                try {
                    const mappedResult = mapper(r[okTag]);
                    if (typeof mappedResult === "object" && resultTag in mappedResult) {
                        mappedResult[resultTag].observer.once(() => {
                            if (okTag in mappedResult[resultTag]) {
                                out[resultTag][okTag] = mappedResult[resultTag][okTag];
                            }
                            else {
                                out[resultTag][errorTag] = mappedResult[resultTag][errorTag];
                            }
                            out[resultTag].done = true;
                            out[resultTag].observer.fire();
                        });
                    }
                    else {
                        out[resultTag][okTag] = mappedResult;
                        out[resultTag].done = true;
                        out[resultTag].observer.fire();
                    }
                }
                catch (e) {
                    out[resultTag][errorTag] = e;
                    out[resultTag].done = true;
                    out[resultTag].observer.fire();
                }
            }
            else {
                out[resultTag][errorTag] = r[errorTag];
                out[resultTag].done = true;
                out[resultTag].observer.fire();
            }
        });
        return out;
    };
}
function mapErr(mapper) {
    return (res) => {
        const r = res[resultTag];
        const out = {
            [resultTag]: {
                done: false,
                observer: new observer_1.default()
            }
        };
        r.observer.once(() => {
            if (errorTag in r) {
                try {
                    const mappedResult = mapper(r[errorTag]);
                    if (typeof mappedResult === "object" && resultTag in mappedResult) {
                        mappedResult[resultTag].observer.once(() => {
                            if (errorTag in mappedResult[resultTag]) {
                                out[resultTag][errorTag] = mappedResult[resultTag][errorTag];
                            }
                            else {
                                out[resultTag][okTag] = mappedResult[resultTag][okTag];
                            }
                            out[resultTag].done = true;
                            out[resultTag].observer.fire();
                        });
                    }
                    else {
                        out[resultTag][errorTag] = mappedResult;
                        out[resultTag].done = true;
                        out[resultTag].observer.fire();
                    }
                }
                catch (e) {
                    out[resultTag][okTag] = r[okTag];
                    out[resultTag].done = true;
                    out[resultTag].observer.fire();
                }
            }
            else {
                out[resultTag][okTag] = r[okTag];
                out[resultTag].done = true;
                out[resultTag].observer.fire();
            }
        });
        return out;
    };
}
const merge = () => (it) => new Promise(async (resolve) => {
    if (await (0, exports.isAsyncOk)()(it)) {
        it[resultTag].observer.once(() => resolve(it[resultTag][okTag]));
    }
    else {
        it[resultTag].observer.once(() => resolve(it[resultTag][errorTag]));
    }
});
const AsyncResults = {
    map,
    mapErr,
    of: toAsyncResult,
    getAsyncOk,
    getAsyncErr,
    unwrap,
    $: async_result_ok_compose_gen_1.asyncResultOkCompose,
    $AsyncErr: async_result_err_compose_gen_1.asyncResultErrCompose,
    merge
};
exports.default = AsyncResults;
