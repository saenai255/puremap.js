import Options, { Some, Option, None } from "./option";
import Results, { Err } from "./result";

const map = <T, E>(fn: (elem: T, idx: number, array: ReadonlyArray<T>) => E) => (array: T[]) => array.map(fn);
const filter = <T>(fn: (elem: T, idx: number, array: ReadonlyArray<T>) => boolean) => (array: T[]): T[] => array.filter(fn);
const find = <T>(fn: (elem: T, idx: number, array: ReadonlyArray<T>) => boolean) => (array: T[]) => Options.of(array.find(fn));
const every = <T>(fn: (elem: T, idx: number, array: ReadonlyArray<T>) => boolean) => (array: T[]) => array.every(fn);
const some = <T>(fn: (elem: T, idx: number, array: ReadonlyArray<T>) => boolean) => (array: T[]) => array.some(fn);
const reduce = <T, E>(fn: (accumulator: E, elem: T) => E, initialValue: E) => (array: T[]) => array.reduce(fn, initialValue)
const reduceRight = <T, E>(fn: (accumulator: E, elem: T) => E, initialValue: E) => (array: T[]) => array.reduceRight(fn, initialValue)
const foldl = <T>(fn: (left: T, right: T) => T, defaultValue: T) => (array: T[]) => array.length === 0 ? defaultValue : array.reduce(fn, array.at(0))
const foldr = <T>(fn: (left: T, right: T) => T, defaultValue: T) => (array: T[]) => array.length === 0
    ? defaultValue
    : array.slice(0, -1).reduceRight(fn, array.at(array.length - 1))
const isEmpty = <T>() => (array: T[]): boolean => array.length === 0
const fromString = (delimiter: string) => (str: string) => str.split(delimiter)
const join = (delimiter: string = '') => (array: string[]) => array.join(delimiter)
const sum = () => (array: number[]) => array.reduce((acc, it) => it + acc, 0)
const product = () => (array: number[]) => array.reduce((acc, it) => it * acc, 1)
const pow = (exp: number) => (array: number[]) => array.map(it => Math.pow(it, exp))
const powOf = (base: number) => (array: number[]) => array.map(it => Math.pow(base, it))
/** Returns Result$Err if divisor === 0 */
const divBy = (divisor: number) => (array: number[]) => array.map(it => divisor === 0 ? Err(new Error('division by zero')) : Results.of(() => it / divisor))
/** Returns Result$Err if any element === 0 */
const divOf = (dividend: number) => (array: number[]) => array.map(it => it === 0 ? Err(new Error('division by zero')) : Results.of(() => dividend / it))
const tuple = <T>(size = 2) => (array: T[]) => {
    const out: Option<T>[][] = [];
    for (let i = 0; i < array.length; i += size) {
        const subarray: Option<T>[] = array.slice(i, i + size).map(Some)
        while (subarray.length < size) {
            subarray.push(None())
        }
        out.push(subarray)
    }
    return out;
}
const flat = <T>() => (arrayOfArrays: T[][]): T[] => arrayOfArrays.flat()
const flatMap = <T, E>(fn: (elem: T, idx: number, array: ReadonlyArray<T>) => E[]) => (array: T[]): E[] => array.flatMap(fn)
const first = <T>() => (array: T[]) => array.length === 0 ? None() : Some(array[0])
const last = <T>() => (array: T[]) => array.length === 0 ? None() : Some(array.at(array.length - 1))
const append = <T>(elem: T) => (array: T[]) => [...array, elem];
const prepend = <T>(elem: T) => (array: T[]) => [elem, ...array];
const reverse = <T>() => (array: T[]) => [...array].reverse();
const between = (greaterThan: number, lowerThan: number) => (array: number[]) => array.filter(it => it > greaterThan && it < lowerThan)
const betweenEq = (greaterThanEqual: number, lowerThanEqual: number) => (array: number[]) => array.filter(it => it >= greaterThanEqual && it <= lowerThanEqual)
const gt = (greaterThan: number) => (array: number[]) => array.filter(it => it > greaterThan)
const gte = (greaterThanEqual: number) => (array: number[]) => array.filter(it => it >= greaterThanEqual)
const lt = (lowerThan: number) => (array: number[]) => array.filter(it => it < lowerThan)
const lte = (lowerThanEqual: number) => (array: number[]) => array.filter(it => it <= lowerThanEqual)
const debug = <T>(prefix: string = '') => (array: T[]) => {
    array.forEach((it, i) => console.log(`debug${ prefix ? `[${prefix}]` : '' }[${i}] =`, it))
    return [...array]
}
const shiftr = <T>(by: number = 1) => ([...array]: T[]) => {
    if (array.length === 0) {
        return array
    }

    const byRem = by % array.length
    return [...array.slice(array.length - byRem, array.length), ...array.slice(0, array.length - byRem)]
}
const shiftl = <T>(by: number = 1) => ([...array]: T[]) => {
    if (array.length === 0) {
        return array
    }

    const byRem = by % array.length
    return [...array.slice(array.length - byRem, array.length), ...array.slice(0, array.length - byRem)]
}

type PrimitiveType<T> = T extends number
    ? number
    : T extends string
    ? string
    : T extends boolean
    ? boolean
    : never

const sorter = {
    asc: <T>(left: PrimitiveType<T>, right: PrimitiveType<T>): number => {
        if (typeof left !== typeof right) {
            throw new Error(`Sort Error. Left and right elements are not the same type. Left is ${left} and right is ${right}`)
        }

        if (typeof left === 'number') {
            return left - (right as number);
        }

        if (typeof left === 'boolean') {
            return Number(left) - Number(right)
        }

        if (typeof left === 'string') {
            return left.localeCompare(right as string)
        }

        throw new Error('Unreachable');
    },
    desc: <T>(left: PrimitiveType<T>, right: PrimitiveType<T>): number => sorter.asc(left, right) * (-1)
};


const sort = <T>(fn: (left: T, right: T) => number = sorter.asc, customSort?: (array: T[], compare: (left: T, right: T) => number) => T[]) =>
    (array: T[]) =>
        customSort
        ? customSort([...array], fn)
        : [...array].sort(fn);

type Indexable = number | string | symbol 
const concat = <T>(otherArray: T[]) => (array: T[]) => [...array, ...otherArray];
const toObject = <T>(fn: ((elem: T, idx: number) => Indexable) = (_, idx) => idx) => (array: T[]): Record<Indexable, T> =>
    array.map((it, idx) => ({[fn(it, idx)]: it}))
        .reduce((acc, it) => ({ ...acc, ...it }), {})
const fromObject = <T>(fn: (key: Indexable) => number) => (object: Record<Indexable, T>) =>
    Object.entries(object)
        .map(([key, value]) => [fn(key), value])
        .sort(([a]: [number, T], [b]: [number, T]) => a - b)
        .map(([_, it]: [number, T]) => it)

const uniqueBy = <T>(eq: (a: T, b: T) => boolean) => (array: T[]) => {
    const out: T[] = [];
    for (const elem of array) {
        const found = out.some(it => eq(it, elem))
        if (!found) {
            out.push(elem)
        }
    }
    return out
}

const unique = <T>() => (array: PrimitiveType<T>[]): T[] => {
    const out: PrimitiveType<T>[] = [];
    for (const elem of array) {
        const found = out.some(it => it === elem)
        if (!found) {
            out.push(elem)
        }
    }
    return out as any
}

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
}

export default Arrays