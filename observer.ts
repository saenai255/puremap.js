type ListenerFn = () => any 

export default class Observer {
    private listeners: ListenerFn[] = []
    private done = false;

    once(fn: ListenerFn) {
        if (this.done) {
            fn();
            return;
        }

        this.listeners.push(fn)
    }

    fire() {
        this.done = true;
        this.listeners.forEach(fn => fn())
        this.listeners = [];
    }

    static nextLoop(fn: ListenerFn): Observer {
        const obs = new Observer()
        obs.once(fn)
        setTimeout(() => obs.fire());
        return obs;
    }
}