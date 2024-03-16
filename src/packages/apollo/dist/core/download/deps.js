"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveStreamDest = exports.writeBuffer = exports.downloadStream = exports.createFileForWritting = void 0;
var promises_1 = require("fs/promises");
var fs_1 = require("fs");
var common_1 = require("../common");
var ytdl_core_1 = __importDefault(require("ytdl-core"));
process.env.YTDL_NO_UPDATE = "true";
// env dependence : DOWNLOAD_DEBUG = NIGHT ; OFFLINE = NIGHT
function createFileForWritting(path) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, common_1.apollo)("action  => creating resource @path : ".concat(path));
                    return [4 /*yield*/, (0, promises_1.writeFile)(path, "").then(function () {
                            (0, common_1.apollo)("success => creating resource @path : ".concat(path));
                            var msg = {
                                boundary: "creating resource",
                                msg: "created resource @path : ".concat(path),
                            };
                            return msg;
                        }, function (err) {
                            (0, common_1.apollo)("failure => creating resource @path : ".concat(path));
                            var error = {
                                boundary: "creating resource",
                                error: err,
                            };
                            return Promise.reject(error);
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createFileForWritting = createFileForWritting;
function resolveStreamDest(dest) {
    return new Promise(function (solved, mystery) {
        (0, common_1.apollo)("action  => resolving stream @dest : ".concat(dest));
        var streamDest = (0, fs_1.createWriteStream)(dest);
        streamDest.on("error", function (err) {
            (0, common_1.apollo)("failure => resolving stream @dest : ".concat(dest));
            var error = {
                boundary: "resolving stream",
                error: err,
            };
            mystery(err);
        });
        streamDest.on("ready", function () {
            (0, common_1.apollo)("success => resolving stream @dest : ".concat(dest));
            solved(streamDest);
        });
    });
}
exports.resolveStreamDest = resolveStreamDest;
function downloadStream(url, itag) {
    (0, common_1.apollo)("action  => downloading stream @itag : ".concat(itag, " @url : ").concat(url));
    return new Promise(function (solved, mystery) {
        var stream = (0, ytdl_core_1.default)(url, { quality: itag });
        var chunks = [];
        stream.on("error", function (err) {
            (0, common_1.apollo)("failure => downloading stream @itag : ".concat(itag, " @url : ").concat(url));
            var error = {
                boundary: "downloading stream",
                error: err,
            };
            mystery(error); // real one
            // var off = ['offlineStreams/aud.mp4','offlineStreams/vid.mp4'][Math.floor(Math.random())]      
            // process.env.OFFLINE == 'APOLLO' ? solved(readFileSync(off)) : mystery(error); 
        });
        stream.on('data', function (chunk) {
            process.env.SHOW_BUFFER == 'APOLLO' ? process.stdout.write('.') : '';
            chunks.push(chunk);
        });
        stream.on("end", function () {
            (0, common_1.apollo)("\nsuccess => downloading stream @itag : ".concat(itag, " @url : ").concat(url));
            var dataBuffers = Buffer.concat(chunks);
            solved(dataBuffers);
        });
    });
}
exports.downloadStream = downloadStream;
function writeBuffer(buffer, dest) {
    return new Promise(function (solved, mystery) {
        (0, common_1.apollo)("action  => writing buffer @dest : ".concat(dest));
        dest.write(buffer);
        dest.end().on("error", function (err) {
            (0, common_1.apollo)("failure => writing buffer @dest : ".concat(dest));
            var error = {
                boundary: "writing buffer",
                error: err,
            };
            mystery(error);
        }).on("finish", function () {
            (0, common_1.apollo)("success => writing buffer @dest : ".concat(dest));
            var serverMsg = {
                boundary: "writing buffer",
                msg: "written buffer @dest : ".concat(dest)
            };
            solved(serverMsg);
        });
    });
}
exports.writeBuffer = writeBuffer;
