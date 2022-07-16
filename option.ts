import { optionCompose } from "./option-compose.gen";

const optionTag = Symbol('Option');
const noneTag = Symbol('None');
const someTag = Symbol('Some');

export class OptionUnwrapError extends Error {}

export type Option$None = {
    readonly [optionTag]: typeof noneTag
};
export type Option$Some<T> = {
    readonly [optionTag]: typeof someTag;
    readonly [someTag]: T;
};
export type Option<T> = Option$None | Option$Some<T>;



export const isSome = <T>(option: Option<T | Option<T>>): option is Option$Some<T> => optionTag in option && option[optionTag] === someTag
export const isNone = <T>(option: Option<T | Option<T>>): option is Option$None => optionTag in option && option[optionTag] === noneTag

export const None = <T>(): Option<T> => ({ [optionTag]: noneTag });

export function Some<T>(value: T | Option<T>): Option<T> {
    if (typeof value === 'object' && optionTag in value) {
        return value as any;
    }

    return {
        [optionTag]: someTag,
        [someTag]: value as any
    } as any;
}

/**
 * @unsafe
 * @throws
 */
const unwrap = <T>(option: Option<T>): T => isSome(option) ? option[someTag] : (() => {
    throw new OptionUnwrapError();
})() as any;

const fromSome = <T>(some: Option$Some<T>): T => unwrap(some);

interface ToOptionArgs {
    allowUndefined?: boolean;
    allowNull?: boolean;
}
const toOption = <T>(obj: T | undefined | null, opts: ToOptionArgs = {}): Option<T> => {
    if ((opts.allowNull && obj === null) || (opts.allowUndefined && obj === undefined) || (obj !== undefined && obj !== null)) {
        return Some(obj) as any;
    }

    return None()
}

function map<T, E>(mapper: (it: T) => E | Option<E>): (it: Option<T>) => Option<E> {
    return (opt: Option<T>) => {
        if (isSome(opt)) {
            return Some(mapper(fromSome(opt)))
        }
    
        return None()
    }
}

const Options = {
    map,
    of: toOption,
    unwrap,
    get: fromSome,
    $: optionCompose
}

export default Options