"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const option_1 = __importStar(require("./option"));
const result_1 = __importStar(require("./result"));
const map = (fn) => (array) => array.map(fn);
const filter = (fn) => (array) => array.filter(fn);
const find = (fn) => (array) => option_1.default.of(array.find(fn));
const every = (fn) => (array) => array.every(fn);
const some = (fn) => (array) => array.some(fn);
const reduce = (fn, initialValue) => (array) => array.reduce(fn, initialValue);
const reduceRight = (fn, initialValue) => (array) => array.reduceRight(fn, initialValue);
const foldl = (fn, defaultValue) => (array) => array.length === 0 ? defaultValue : array.reduce(fn, array.at(0));
const foldr = (fn, defaultValue) => (array) => array.length === 0
    ? defaultValue
    : array.slice(0, -1).reduceRight(fn, array.at(array.length - 1));
const isEmpty = () => (array) => array.length === 0;
const fromString = (delimiter) => (str) => str.split(delimiter);
const join = (delimiter = '') => (array) => array.join(delimiter);
const sum = () => (array) => array.reduce((acc, it) => it + acc, 0);
const product = () => (array) => array.reduce((acc, it) => it * acc, 1);
const pow = (exp) => (array) => array.map(it => Math.pow(it, exp));
const powOf = (base) => (array) => array.map(it => Math.pow(base, it));
/** Returns Result$Err if divisor === 0 */
const divBy = (divisor) => (array) => array.map(it => divisor === 0 ? (0, result_1.Err)(new Error('division by zero')) : result_1.default.of(() => it / divisor));
/** Returns Result$Err if any element === 0 */
const divOf = (dividend) => (array) => array.map(it => it === 0 ? (0, result_1.Err)(new Error('division by zero')) : result_1.default.of(() => dividend / it));
const tuple = (size = 2) => (array) => {
    const out = [];
    for (let i = 0; i < array.length; i += size) {
        const subarray = array.slice(i, i + size).map(option_1.Some);
        while (subarray.length < size) {
            subarray.push((0, option_1.None)());
        }
        out.push(subarray);
    }
    return out;
};
const flat = () => (arrayOfArrays) => arrayOfArrays.flat();
const flatMap = (fn) => (array) => array.flatMap(fn);
const first = () => (array) => array.length === 0 ? (0, option_1.None)() : (0, option_1.Some)(array[0]);
const last = () => (array) => array.length === 0 ? (0, option_1.None)() : (0, option_1.Some)(array.at(array.length - 1));
const append = (elem) => (array) => [...array, elem];
const prepend = (elem) => (array) => [elem, ...array];
const reverse = () => (array) => [...array].reverse();
const between = (greaterThan, lowerThan) => (array) => array.filter(it => it > greaterThan && it < lowerThan);
const betweenEq = (greaterThanEqual, lowerThanEqual) => (array) => array.filter(it => it >= greaterThanEqual && it <= lowerThanEqual);
const gt = (greaterThan) => (array) => array.filter(it => it > greaterThan);
const gte = (greaterThanEqual) => (array) => array.filter(it => it >= greaterThanEqual);
const lt = (lowerThan) => (array) => array.filter(it => it < lowerThan);
const lte = (lowerThanEqual) => (array) => array.filter(it => it <= lowerThanEqual);
const debug = (prefix = '') => (array) => {
    array.forEach((it, i) => console.log(`debug${prefix ? `[${prefix}]` : ''}[${i}] =`, it));
    return [...array];
};
const shiftr = (by = 1) => ([...array]) => {
    if (array.length === 0) {
        return array;
    }
    const byRem = by % array.length;
    return [...array.slice(array.length - byRem, array.length), ...array.slice(0, array.length - byRem)];
};
const shiftl = (by = 1) => ([...array]) => {
    if (array.length === 0) {
        return array;
    }
    const byRem = by % array.length;
    return [...array.slice(array.length - byRem, array.length), ...array.slice(0, array.length - byRem)];
};
const sorter = {
    asc: (left, right) => {
        if (typeof left !== typeof right) {
            throw new Error(`Sort Error. Left and right elements are not the same type. Left is ${left} and right is ${right}`);
        }
        if (typeof left === 'number') {
            return left - right;
        }
        if (typeof left === 'boolean') {
            return Number(left) - Number(right);
        }
        if (typeof left === 'string') {
            return left.localeCompare(right);
        }
        throw new Error('Unreachable');
    },
    desc: (left, right) => sorter.asc(left, right) * (-1)
};
const sort = (fn = sorter.asc, customSort) => (array) => customSort
    ? customSort([...array], fn)
    : [...array].sort(fn);
const concat = (otherArray) => (array) => [...array, ...otherArray];
const toObject = (fn = (_, idx) => idx) => (array) => array.map((it, idx) => ({ [fn(it, idx)]: it }))
    .reduce((acc, it) => ({ ...acc, ...it }), {});
const fromObject = (fn) => (object) => Object.entries(object)
    .map(([key, value]) => [fn(key), value])
    .sort(([a], [b]) => a - b)
    .map(([_, it]) => it);
const uniqueBy = (eq) => (array) => {
    const out = [];
    for (const elem of array) {
        const found = out.some(it => eq(it, elem));
        if (!found) {
            out.push(elem);
        }
    }
    return out;
};
const unique = () => (array) => {
    const out = [];
    for (const elem of array) {
        const found = out.some(it => it === elem);
        if (!found) {
            out.push(elem);
        }
    }
    return out;
};
const Arrays = {
    map,
    filter,
    find,
    some,
    every,
    sort,
    sorter,
    append,
    debug,
    divBy,
    divOf,
    first,
    flat,
    flatMap,
    foldl,
    foldr,
    reduce,
    reduceRight,
    last,
    prepend,
    join,
    reverse,
    isEmpty,
    sum,
    product,
    pow,
    powOf,
    tuple,
    fromString,
    shiftr,
    shiftl,
    concat,
    unique,
    uniqueBy,
    between,
    betweenEq,
    gt,
    lt,
    gte,
    lte,
    toObject,
    fromObject
};
exports.default = Arrays;
