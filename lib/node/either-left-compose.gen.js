"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leftCompose = void 0;
const compose_1 = __importDefault(require("./compose"));
const either_1 = __importDefault(require("./either"));
function leftCompose(...fns) {
    return either_1.default.mapLeft(compose_1.default.$(...fns));
}
exports.leftCompose = leftCompose;
