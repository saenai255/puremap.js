"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isErr = exports.isOk = exports.Ok = exports.Err = exports.ResultUnwrapError = void 0;
const result_err_compose_gen_1 = require("./result-err-compose.gen");
const result_ok_compose_gen_1 = require("./result-ok-compose.gen");
const resultTag = Symbol('result');
const errorTag = Symbol('error');
const okTag = Symbol('ok');
class ResultUnwrapError extends Error {
    constructor(uncaught, message) {
        super(message);
        this.uncaught = uncaught;
    }
}
exports.ResultUnwrapError = ResultUnwrapError;
const Err = (e) => ({
    [resultTag]: errorTag,
    [errorTag]: e
});
exports.Err = Err;
const Ok = (value) => ({
    [resultTag]: okTag,
    [okTag]: value
});
exports.Ok = Ok;
const isOk = (result) => resultTag in result && result[resultTag] === okTag;
exports.isOk = isOk;
const isErr = (result) => resultTag in result && result[resultTag] === errorTag;
exports.isErr = isErr;
/**
 * @unsafe
 * @throws
 */
const unwrap = () => (result) => (0, exports.isOk)(result) ? result[okTag] : (() => {
    throw new ResultUnwrapError(result[errorTag]);
})();
/**
 * @unsafe
 * @throws
 */
const unwrapErr = () => (result) => (0, exports.isErr)(result) ? result[errorTag] : (() => {
    throw new ResultUnwrapError(result[okTag]);
})();
const fromOk = () => (ok) => unwrap()(ok);
const fromErr = () => (err) => unwrapErr()(err);
const toResult = (fn) => {
    try {
        return (0, exports.Ok)(fn());
    }
    catch (e) {
        return (0, exports.Err)(e);
    }
};
function map(mapper) {
    return (res) => {
        if ((0, exports.isOk)(res)) {
            return toResult(() => mapper(fromOk()(res)));
        }
        return (0, exports.Err)(res[errorTag]);
    };
}
function mapErr(mapper) {
    return (res) => {
        if ((0, exports.isErr)(res)) {
            return (0, exports.Err)(mapper(fromErr()(res)));
        }
        return res;
    };
}
const merge = () => (either) => {
    if ((0, exports.isOk)(either)) {
        return fromOk()(either);
    }
    else {
        return fromErr()(either);
    }
};
const Results = {
    unwrap,
    getOk: fromOk,
    getErr: fromErr,
    of: toResult,
    map,
    mapErr,
    $: result_ok_compose_gen_1.okCompose,
    $Err: result_err_compose_gen_1.errCompose,
    merge
};
exports.default = Results;
