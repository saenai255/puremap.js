declare type ListenerFn = () => any;
export default class Observer {
    private listeners;
    private done;
    once(fn: ListenerFn): void;
    fire(): void;
    static nextLoop(fn: ListenerFn): Observer;
}
export {};
