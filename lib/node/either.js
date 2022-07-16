"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeft = exports.isRight = exports.Left = exports.Right = void 0;
const either_left_compose_gen_1 = require("./either-left-compose.gen");
const either_right_compose_gen_1 = require("./either-right-compose.gen");
const eitherTag = Symbol('Either');
const leftTag = Symbol('Left');
const rightTag = Symbol('Right');
class ResultUnwrapError extends Error {
    constructor(message) {
        super(message);
    }
}
const Right = (right) => ({
    [eitherTag]: rightTag,
    [rightTag]: right
});
exports.Right = Right;
const Left = (left) => ({
    [eitherTag]: leftTag,
    [leftTag]: left
});
exports.Left = Left;
const isRight = (result) => eitherTag in result && result[eitherTag] === rightTag;
exports.isRight = isRight;
const isLeft = (result) => eitherTag in result && result[eitherTag] === leftTag;
exports.isLeft = isLeft;
/**
 * @unsafe
 * @throws
 */
const unwrapRight = () => (either) => (0, exports.isRight)(either) ? either[rightTag] : (() => {
    throw new ResultUnwrapError('Failed to unwrapRight because the given parameter was Either$Left');
})();
/**
 * @unsafe
 * @throws
 */
const unwrapLeft = () => (result) => (0, exports.isLeft)(result) ? result[leftTag] : (() => {
    throw new ResultUnwrapError('Failed to unwrapLeft because the given parameter was Either$Right');
})();
const getRight = () => (right) => unwrapRight()(right);
const getLeft = () => (left) => unwrapLeft()(left);
function mapLeft(mapper) {
    return (res) => {
        if ((0, exports.isLeft)(res)) {
            return (0, exports.Left)(mapper(getLeft()(res)));
        }
        return res;
    };
}
function mapRight(mapper) {
    return (res) => {
        if ((0, exports.isRight)(res)) {
            return (0, exports.Right)(mapper(getRight()(res)));
        }
        return res;
    };
}
const merge = () => (either) => {
    if ((0, exports.isLeft)(either)) {
        return getLeft()(either);
    }
    else {
        return getRight()(either);
    }
};
const Eithers = {
    unwrapRight,
    unwrapLeft,
    getLeft,
    getRight,
    mapRight,
    mapLeft,
    $Left: either_left_compose_gen_1.leftCompose,
    $Right: either_right_compose_gen_1.rightCompose,
    merge
};
exports.default = Eithers;
