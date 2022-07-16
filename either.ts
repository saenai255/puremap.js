import Compose from "./compose";
import { leftCompose } from "./either-left-compose.gen";
import { rightCompose } from "./either-right-compose.gen";
import { okCompose } from "./result-ok-compose.gen";

const eitherTag = Symbol('Either');
const leftTag = Symbol('Left');
const rightTag = Symbol('Right');

class ResultUnwrapError extends Error {
    constructor(message?: string) {
        super(message);
    }
}

export type Either$Left<L, R> = {
    readonly [eitherTag]: typeof leftTag
    readonly [leftTag]: L;
};
export type Either$Right<L, R> = {
    readonly [eitherTag]: typeof rightTag;
    readonly [rightTag]: R;
};

export type Either<L, R> = Either$Left<L, R> | Either$Right<L, R>

export const Right = <L, R>(right: R): Either<L, R> => ({
    [eitherTag]: rightTag,
    [rightTag]: right
});

export const Left = <L, R>(left: L): Either<L, R> => ({
    [eitherTag]: leftTag,
    [leftTag]: left
});

export const isRight = <L, R>(result: Either<L, R>): result is Either$Right<L, R> => eitherTag in result && result[eitherTag] === rightTag
export const isLeft = <L, R>(result: Either<L, R>): result is Either$Left<L, R> => eitherTag in result && result[eitherTag] === leftTag

/**
 * @unsafe
 * @throws
 */
 const unwrapRight = <L, R>() => (either: Either<L, R>): R => isRight(either) ? either[rightTag] : (() => {
    throw new ResultUnwrapError('Failed to unwrapRight because the given parameter was Either$Left');
})();

/**
 * @unsafe
 * @throws
 */
const unwrapLeft = <L, R>() => (result: Either<L, R>): L => isLeft(result) ? result[leftTag] : (() => {
    throw new ResultUnwrapError('Failed to unwrapLeft because the given parameter was Either$Right');
})();

const getRight = <L, R>() => (right: Either$Right<L, R>): R => unwrapRight<L, R>()(right);
const getLeft = <L, R>() => (left: Either$Left<L, R>): L => unwrapLeft<L, R>()(left);

function mapLeft<L1, L2, R>(mapper: (it: L1) =>L2): (it: Either<L1, R>) => Either<L2, R>{
    return (res: Either<L1, R>) => {
        if (isLeft(res)) {
            return Left(mapper(getLeft<L1, R>()(res)))
        }
    
        return res
    }
}

function mapRight<L, R1, R2>(mapper: (it: R1) => R2): (it: Either<L, R1>) => Either<L, R2>{
    return (res: Either<L, R1>) => {
        if (isRight(res)) {
            return Right(mapper(getRight<L, R1>()(res)))
        }
    
        return res
    }
}

const merge = <T>() => (either: Either<T, T>): T => {
    if (isLeft(either)) {
        return getLeft<T, T>()(either)
    } else {
        return getRight<T, T>()(either)
    }
}


const Eithers = {
    unwrapRight,
    unwrapLeft,
    getLeft,
    getRight,
    mapRight,
    mapLeft,
    $Left: leftCompose,
    $Right: rightCompose,
    merge
}

export default Eithers