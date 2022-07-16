"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.okCompose = void 0;
const compose_1 = __importDefault(require("./compose"));
const result_1 = __importDefault(require("./result"));
function okCompose(...fns) {
    return result_1.default.map(compose_1.default.$(...fns));
}
exports.okCompose = okCompose;
