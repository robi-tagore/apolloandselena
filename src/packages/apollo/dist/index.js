"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var worker_threads_1 = require("worker_threads");
var serverRunner = new worker_threads_1.Worker(__dirname + "/server", {
    env: {
        SERVER_PORT: (_a = process.env.SERVER_PORT) !== null && _a !== void 0 ? _a : '13169',
        MODE: (_b = process.env.MODE) !== null && _b !== void 0 ? _b : "APOLLO",
        OFFLINE: (_c = process.env.OFFLINE) !== null && _c !== void 0 ? _c : "SELENA",
        ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,
        SHOW_FFMPEG: (_d = process.env.SHOW_FFMPEG) !== null && _d !== void 0 ? _d : "SELENA",
        SHOW_BUFFER: (_e = process.env.SHOW_BUFFER) !== null && _e !== void 0 ? _e : "SELENA",
    },
});
