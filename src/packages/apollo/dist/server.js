"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var deps_1 = require("./deps");
var core_1 = require("./core");
var dep_1 = require("./core/merge/dep");
var cors = require("cors");
var server = (0, express_1.default)();
var port = process.env.SERVER_PORT;
server.use(express_1.default.json());
// server.use(cors({ origin: "https://apolloandselena.onrender.com" }));
server.use(cors({
    origin: process.env.ALLOWED_ORIGIN,
}));
server.post("/loadformats", function (request, response) {
    (0, deps_1.APOLLO_OUT)("request found @/loadformats");
    var reqBody = request.body;
    var url = reqBody.url;
    (0, core_1.getFormats)(url).then(function (d) {
        var toFly = {
            condition: "APOLLO",
            data: d,
        };
        response.status(200).json(toFly);
        (0, deps_1.APOLLO_OUT)("request resolved as success @/loadformats");
    }, function (e) {
        var toFly = {
            condition: "NIGHT",
            data: e,
        };
        response.status(200).json(toFly);
        (0, deps_1.APOLLO_OUT)("request resolved as failure @/loadformats");
        console.log(e);
    });
});
server.post("/download", function (request, response) {
    (0, deps_1.APOLLO_OUT)("request found @/download");
    var reqBody = request.body;
    (0, core_1.getDistributeAble)(reqBody.url, reqBody.format).then(function (path) {
        response.status(200).sendFile(process.cwd() + "/" + path);
        response.addListener("close", function () {
            (0, dep_1.clearCache)(process.cwd() + "/" + path);
        });
        (0, deps_1.APOLLO_OUT)("resolved request as success @/download");
    }, function (err) {
        (0, deps_1.APOLLO_OUT)("resolved request as failure @/download");
        console.log(err);
        response.status(513).json(err);
    });
});
// server.get("/download", (request, response) => {
//   response.setHeader('Content-Disposition', 'attachment; filename=example.mp4');
//   createReadStream('./offlineStreams/vid.mp4').pipe(response)
// });
// server.get("/", (request, response) => {
//   response.sendFile(process.cwd() + '/offlineStreams/index.html')
// })
server.listen(port, function () {
    (0, deps_1.APOLLO_OUT)("@env SERVER_PORT = ".concat(process.env.SERVER_PORT));
    (0, deps_1.APOLLO_OUT)("@env MODE = ".concat(process.env.MODE));
    (0, deps_1.APOLLO_OUT)("@env OFFLINE = ".concat(process.env.OFFLINE));
    (0, deps_1.APOLLO_OUT)("@env SHOW_FFMPEG = ".concat(process.env.SHOW_FFMPEG));
    (0, deps_1.APOLLO_OUT)("@env SHOW_BUFFER = ".concat(process.env.SHOW_BUFFER));
    (0, deps_1.APOLLO_OUT)("@env ALLOWED_ORIGIN = ".concat(process.env.ALLOWED_ORIGIN));
    (0, deps_1.APOLLO_OUT)("has started @port :".concat(port));
    (0, deps_1.APOLLO_OUT)("waiting for requests");
});
