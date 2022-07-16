"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionCompose = void 0;
const compose_1 = __importDefault(require("./compose"));
const option_1 = __importDefault(require("./option"));
function optionCompose(...fns) {
    return option_1.default.map(compose_1.default.$(...fns));
}
exports.optionCompose = optionCompose;
