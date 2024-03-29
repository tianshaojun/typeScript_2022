"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var router_1 = __importDefault(require("./router"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    req.teacherName = 'dell';
    next();
});
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: ['teacher dell'],
    maxAge: 1000 * 60 * 60 * 24, //有效时间
}));
app.use(router_1.default);
app.listen(7001, function () {
    console.log('server is running!');
});
