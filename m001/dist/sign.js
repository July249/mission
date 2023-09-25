"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
function sign(payload, header) {
    if (header === void 0) { header = { typ: "JWT", alg: "HS256" }; }
    var encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64').replace('=', '');
    // currently, payload has only two private claims: name, phoneNumber
    var encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64').replace('=', '');
    var signature = crypto.createHmac('sha256', 'secret').update(encodedHeader + '.' + encodedPayload).digest('base64').replace('=', '');
    var token = encodedHeader + '.' + encodedPayload + '.' + signature;
    return token;
}
exports.default = sign;
;
