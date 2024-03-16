"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APOLLO_OUT = void 0;
function APOLLO_OUT(arg) {
    if (process.env.APOLLO_MODE != 'NIGHT') {
        console.log("APOLLO =:> ".concat(arg));
    }
}
exports.APOLLO_OUT = APOLLO_OUT;
