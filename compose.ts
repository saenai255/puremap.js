type PipeFn<I, O> = (input: I) => O;

export function compose<In, Out> (fn1: PipeFn<In, Out>): (input: In) => Out;
export function compose<In, Out, A = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, Out>
): (input: In) => Out
export function compose<In, Out, A = never, B = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, Out>
): (input: In) => Out
export function compose<In, Out, A = never, B = never, C = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, Out>
): (input: In) => Out
export function compose<In, Out, A = never, B = never, C = never, D = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, Out>
): (input: In) => Out
export function compose<In, Out, A = never, B = never, C = never, D = never, E = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, Out>
): (input: In) => Out
export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, Out>
): (input: In) => Out
export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, Out>
): (input: In) => Out
export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, Out>
): (input: In) => Out
export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, Out>
): (input: In) => Out
export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, Out>
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Q>,
    fn18: PipeFn<Q, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Q>,
    fn18: PipeFn<Q, R>,
    fn19: PipeFn<R, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never, S = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Q>,
    fn18: PipeFn<Q, R>,
    fn19: PipeFn<R, S>,
    fn20: PipeFn<S, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never, S = never, T = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Q>,
    fn18: PipeFn<Q, R>,
    fn19: PipeFn<R, S>,
    fn20: PipeFn<S, T>,
    fn21: PipeFn<T, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never, S = never, T = never, U = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Q>,
    fn18: PipeFn<Q, R>,
    fn19: PipeFn<R, S>,
    fn20: PipeFn<S, T>,
    fn21: PipeFn<T, U>,
    fn22: PipeFn<U, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never, S = never, T = never, U = never, V = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Q>,
    fn18: PipeFn<Q, R>,
    fn19: PipeFn<R, S>,
    fn20: PipeFn<S, T>,
    fn21: PipeFn<T, U>,
    fn22: PipeFn<U, V>,
    fn23: PipeFn<V, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never, S = never, T = never, U = never, V = never, W = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Q>,
    fn18: PipeFn<Q, R>,
    fn19: PipeFn<R, S>,
    fn20: PipeFn<S, T>,
    fn21: PipeFn<T, U>,
    fn22: PipeFn<U, V>,
    fn23: PipeFn<V, W>,
    fn24: PipeFn<W, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never, S = never, T = never, U = never, V = never, W = never, X = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Q>,
    fn18: PipeFn<Q, R>,
    fn19: PipeFn<R, S>,
    fn20: PipeFn<S, T>,
    fn21: PipeFn<T, U>,
    fn22: PipeFn<U, V>,
    fn23: PipeFn<V, W>,
    fn24: PipeFn<W, X>,
    fn25: PipeFn<X, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never, S = never, T = never, U = never, V = never, W = never, X = never, Y = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Q>,
    fn18: PipeFn<Q, R>,
    fn19: PipeFn<R, S>,
    fn20: PipeFn<S, T>,
    fn21: PipeFn<T, U>,
    fn22: PipeFn<U, V>,
    fn23: PipeFn<V, W>,
    fn24: PipeFn<W, X>,
    fn25: PipeFn<X, Y>,
    fn26: PipeFn<Y, Out>,
): (input: In) => Out

export function compose<In, Out, A = never, B = never, C = never, D = never, E = never, F = never, G = never, H = never, I = never, J = never, K = never, L = never, M = never, N = never, O = never, P = never, Q = never, R = never, S = never, T = never, U = never, V = never, W = never, X = never, Y = never, Z = never> (
    fn1: PipeFn<In, A>,
    fn2: PipeFn<A, B>,
    fn3: PipeFn<B, C>,
    fn4: PipeFn<C, D>,
    fn5: PipeFn<D, E>,
    fn6: PipeFn<E, F>,
    fn7: PipeFn<F, G>,
    fn8: PipeFn<G, H>,
    fn9: PipeFn<H, I>,
    fn10: PipeFn<I, J>,
    fn11: PipeFn<J, K>,
    fn12: PipeFn<K, L>,
    fn13: PipeFn<L, M>,
    fn14: PipeFn<M, N>,
    fn15: PipeFn<N, O>,
    fn16: PipeFn<O, P>,
    fn17: PipeFn<P, Q>,
    fn18: PipeFn<Q, R>,
    fn19: PipeFn<R, S>,
    fn20: PipeFn<S, T>,
    fn21: PipeFn<T, U>,
    fn22: PipeFn<U, V>,
    fn23: PipeFn<V, W>,
    fn24: PipeFn<W, X>,
    fn25: PipeFn<X, Y>,
    fn26: PipeFn<Y, Z>,
    fn27: PipeFn<Z, Out>,
): (input: In) => Out;
export function compose(...fns) {
    return it => fns.reduce((value, f) => f(value), it);
}

const Compose = {
    $: compose,
    debug: <T>(msg?: string, logger: (prefix: string, obj: any, msg?: string) => void = (p, o, m) => console.log(p, m, o)) => (it: T): T => {
        logger(`pipe.debug`, it, msg || '');
        return it
    }
}
export default Compose;
