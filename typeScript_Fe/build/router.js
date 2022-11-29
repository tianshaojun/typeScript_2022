"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dellAnalyzer_1 = __importDefault(require("./dellAnalyzer"));
var crowller_1 = __importDefault(require("./crowller"));
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    res.send("\n     <html>\n       <body>\n          <form method=\"post\" action=\"/getData\">\n             <input type=\"password\" name=\"password\" />\n             <button>\u63D0\u4EA4</button>\n          </form>\n       </body>\n     </html>\n  ");
});
router.post('/getData', function (req, res) {
    var password = req.body.password;
    if (password === '123') {
        var secret = 'secretKey';
        var url = "http://www.dell-lee.com/typescript/demo.html?secret=".concat(secret);
        var analyzer = new dellAnalyzer_1.default();
        new crowller_1.default(url, analyzer);
        res.send('getData success!');
    }
    else {
        res.send("".concat(req.teacherName, " password error!"));
    }
});
exports.default = router;
