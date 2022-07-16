"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const times = (count, fn) => {
    return new Array(count).fill(0).map((_, idx) => fn(idx + 1));
};
const template = (name, count) => `
type PipeFn<In, Out> = (it: In) => Out;

${times(count, funcNo => `export function ${name}<${times(funcNo + 1, idx => `T${idx - 1}`).join(', ')}> (
    ${times(funcNo, pNo => `fn${pNo - 1}: PipeFn<T${pNo - 1}, T${pNo}>,`).join('\n    ')}
): (input: T0) => T${funcNo}
`).slice(1).join('\n')}

export function ${name}(...fns) {
    return null;
}
`.trim();
console.log(template('$', 30));
