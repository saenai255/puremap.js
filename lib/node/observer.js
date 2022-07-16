"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observer {
    constructor() {
        this.listeners = [];
        this.done = false;
    }
    once(fn) {
        if (this.done) {
            fn();
            return;
        }
        this.listeners.push(fn);
    }
    fire() {
        this.done = true;
        this.listeners.forEach(fn => fn());
        this.listeners = [];
    }
    static nextLoop(fn) {
        const obs = new Observer();
        obs.once(fn);
        setTimeout(() => obs.fire());
        return obs;
    }
}
exports.default = Observer;
