"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = void 0;
var crypto = require("crypto");
var encrypt = function (value) {
    var hashedValue = crypto.createHmac('sha256', 'secret').update(value).digest('base64').replace('=', '');
    return hashedValue;
};
exports.encrypt = encrypt;
