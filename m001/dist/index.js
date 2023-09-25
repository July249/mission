"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sign_1 = require("./sign");
var user = {
    name: "gildong",
    phoneNumber: "010-1234-5678"
};
var answer = (0, sign_1.default)(user);
console.log(answer);
/*
    eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
    eyJuYW1lIjoiZ2lsZG9uZyIsInBob25lTnVtYmVyIjoiMDEwLTEyMzQtNTY3OCJ9.
    F8dQRtgy1gUb9AGyZjcL4VSTO8JccvZgMmiTaACmKBo
 */ 
