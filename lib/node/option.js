"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Some = exports.None = exports.isNone = exports.isSome = exports.OptionUnwrapError = void 0;
const option_compose_gen_1 = require("./option-compose.gen");
const optionTag = Symbol('Option');
const noneTag = Symbol('None');
const someTag = Symbol('Some');
class OptionUnwrapError extends Error {
}
exports.OptionUnwrapError = OptionUnwrapError;
const isSome = (option) => optionTag in option && option[optionTag] === someTag;
exports.isSome = isSome;
const isNone = (option) => optionTag in option && option[optionTag] === noneTag;
exports.isNone = isNone;
const None = () => ({ [optionTag]: noneTag });
exports.None = None;
function Some(value) {
    if (typeof value === 'object' && optionTag in value) {
        return value;
    }
    return {
        [optionTag]: someTag,
        [someTag]: value
    };
}
exports.Some = Some;
/**
 * @unsafe
 * @throws
 */
const unwrap = (option) => (0, exports.isSome)(option) ? option[someTag] : (() => {
    throw new OptionUnwrapError();
})();
const fromSome = (some) => unwrap(some);
const toOption = (obj, opts = {}) => {
    if ((opts.allowNull && obj === null) || (opts.allowUndefined && obj === undefined) || (obj !== undefined && obj !== null)) {
        return Some(obj);
    }
    return (0, exports.None)();
};
function map(mapper) {
    return (opt) => {
        if ((0, exports.isSome)(opt)) {
            return Some(mapper(fromSome(opt)));
        }
        return (0, exports.None)();
    };
}
const Options = {
    map,
    of: toOption,
    unwrap,
    get: fromSome,
    $: option_compose_gen_1.optionCompose
};
exports.default = Options;
