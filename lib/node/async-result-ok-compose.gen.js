"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncResultOkCompose = void 0;
const async_result_1 = __importDefault(require("./async-result"));
const compose_1 = __importDefault(require("./compose"));
function asyncResultOkCompose(...fns) {
    return async_result_1.default.map(compose_1.default.$(...fns));
}
exports.asyncResultOkCompose = asyncResultOkCompose;
