import { leftCompose } from "./either-left-compose.gen";
import { rightCompose } from "./either-right-compose.gen";
declare const eitherTag: unique symbol;
declare const leftTag: unique symbol;
declare const rightTag: unique symbol;
export declare type Either$Left<L, R> = {
    readonly [eitherTag]: typeof leftTag;
    readonly [leftTag]: L;
};
export declare type Either$Right<L, R> = {
    readonly [eitherTag]: typeof rightTag;
    readonly [rightTag]: R;
};
export declare type Either<L, R> = Either$Left<L, R> | Either$Right<L, R>;
export declare const Right: <L, R>(right: R) => Either<L, R>;
export declare const Left: <L, R>(left: L) => Either<L, R>;
export declare const isRight: <L, R>(result: Either<L, R>) => result is Either$Right<L, R>;
export declare const isLeft: <L, R>(result: Either<L, R>) => result is Either$Left<L, R>;
declare function mapLeft<L1, L2, R>(mapper: (it: L1) => L2): (it: Either<L1, R>) => Either<L2, R>;
declare function mapRight<L, R1, R2>(mapper: (it: R1) => R2): (it: Either<L, R1>) => Either<L, R2>;
declare const Eithers: {
    unwrapRight: <L, R>() => (either: Either<L, R>) => R;
    unwrapLeft: <L_1, R_1>() => (result: Either<L_1, R_1>) => L_1;
    getLeft: <L_2, R_2>() => (left: Either$Left<L_2, R_2>) => L_2;
    getRight: <L_3, R_3>() => (right: Either$Right<L_3, R_3>) => R_3;
    mapRight: typeof mapRight;
    mapLeft: typeof mapLeft;
    $Left: typeof leftCompose;
    $Right: typeof rightCompose;
    merge: <T>() => (either: Either<T, T>) => T;
};
export default Eithers;
