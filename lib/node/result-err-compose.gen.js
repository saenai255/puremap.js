"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errCompose = void 0;
const compose_1 = __importDefault(require("./compose"));
const result_1 = __importDefault(require("./result"));
function errCompose(...fns) {
    return result_1.default.mapErr(compose_1.default.$(...fns));
}
exports.errCompose = errCompose;
