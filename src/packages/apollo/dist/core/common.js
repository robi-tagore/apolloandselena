"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueId = exports.apollo = void 0;
function apollo() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (process.env.MODE == 'APOLLO') {
        console.debug.apply(console, args);
    }
}
exports.apollo = apollo;
function uniqueId() {
    var part1 = Date.now().toString();
    var part2 = (Math.random() * 13169).toString().replace('.', '');
    return part1 + part2;
}
exports.uniqueId = uniqueId;
function validateTitle(title, using) {
    if (using === void 0) { using = ' _ '; }
    var disallowed = ['/', '\\', ':', '*', '?', '\"', '<', '>', '|', ':'];
    disallowed.forEach(function (n) {
        title = title.replaceAll(n, using);
    });
    return title;
}
