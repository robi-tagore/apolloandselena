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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormats = exports.getDistributeAble = void 0;
var common_1 = require("./common");
var download_1 = require("./download");
var format_1 = require("./format");
var index_1 = require("./merge/index");
function getDistributeAble(url, format) {
    return __awaiter(this, void 0, void 0, function () {
        var itag, unId, finalDest, itag1, itag2, unId, fileDest1, fileDest2, finalDest, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, common_1.apollo)("internal server request => get distributable @url : ".concat(url, " \n ==> starred"));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 9]);
                    if (!(format.formatType == 'alone')) return [3 /*break*/, 3];
                    itag = format.itags;
                    unId = (0, common_1.uniqueId)();
                    finalDest = "storage/".concat(unId, ".").concat(format.ext);
                    return [4 /*yield*/, (0, download_1.downloadAndSave)(url, itag, finalDest)];
                case 2:
                    _a.sent();
                    (0, common_1.apollo)("internal server request => get distributable @url : ".concat(url, " \n ==> success"));
                    return [2 /*return*/, finalDest];
                case 3:
                    if (!(format.formatType == 'not alone' && Array.isArray(format.itags))) return [3 /*break*/, 7];
                    itag1 = format.itags[0];
                    itag2 = format.itags[1];
                    unId = (0, common_1.uniqueId)();
                    fileDest1 = "storage/".concat(unId).concat(itag1, ".").concat(format.ext);
                    fileDest2 = "storage/".concat(unId).concat(itag2, ".").concat(format.ext);
                    finalDest = "storage/".concat(unId, ".").concat(format.ext);
                    return [4 /*yield*/, (0, download_1.downloadAndSave)(url, itag1, fileDest1)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, download_1.downloadAndSave)(url, itag2, fileDest2)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, (0, index_1.mergeFiles)(fileDest1, fileDest2, finalDest)];
                case 6:
                    _a.sent();
                    (0, common_1.apollo)("internal server request => get distributable @url : ".concat(url, " \n ==> success"));
                    return [2 /*return*/, finalDest];
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_1 = _a.sent();
                    (0, common_1.apollo)("internal server request => get distributable @url : ".concat(url, " \n ==> failure"));
                    return [2 /*return*/, Promise.reject(error_1)];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.getDistributeAble = getDistributeAble;
function getFormats(url) {
    return __awaiter(this, void 0, void 0, function () {
        var formats, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, common_1.apollo)("internal server request => get formats @url : ".concat(url, " \n ==> starred"));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, format_1.loadFormats)(url)];
                case 2:
                    formats = _a.sent();
                    (0, common_1.apollo)("internal server request => get formats @url : ".concat(url, " \n ==> success"));
                    return [2 /*return*/, Promise.resolve(formats)];
                case 3:
                    error_2 = _a.sent();
                    (0, common_1.apollo)("internal server request => get formats @url : ".concat(url, " \n ==> failure"));
                    return [2 /*return*/, Promise.reject(error_2)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getFormats = getFormats;
// getDistributeAble("https://www.youtube.com/watch?v=RWnFowWtT78",{
//     media: "a",
//     formatType: "alone",
//     itags: 251,
//     ext: "webm",
//     spec: {
//       approxDurationMs: "21921",
//       audioBitrate: 160,
//       audioCodec: "opus",
//       videoCodec: null,
//       container: "webm",
//       contentLength: "425766",
//       hasAudio: true,
//       hasVideo: false,
//       itag: 251,
//     },
//   })
// var url = "https://www.youtube.com/watch?v=RWnFowWtT78"
// getDistributeAble("https://www.youtube.com/watch?v=RWnFowWtT78",{
//     media: "v",
//     formatType: "not alone",
//     itags: [137, 140],
//     ext: "mp4",
//     spec: {
//       approxDurationMs: "273000",
//       audioBitrate: 128,
//       audioCodec: "mp4a.40.2",
//       videoCodec: "avc1.640028",
//       container: "mp4",
//       contentLength: "77394815",
//       fps: 25,
//       hasAudio: true,
//       hasVideo: true,
//       height: 1080,
//       width: 1920,
//       itag: [137, 140],
//     },
//   },
// )
// getFormats(url).then((d) => {console.log(d);
// })
