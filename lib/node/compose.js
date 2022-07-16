"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
function compose(...fns) {
    return it => fns.reduce((value, f) => f(value), it);
}
exports.compose = compose;
const Compose = {
    $: compose,
    debug: (msg, logger = (p, o, m) => console.log(p, m, o)) => (it) => {
        logger(`pipe.debug`, it, msg || '');
        return it;
    }
};
exports.default = Compose;
