"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCache = exports.merge = void 0;
var ffmpeg_static_1 = __importDefault(require("ffmpeg-static"));
var child_process_1 = require("child_process");
var common_1 = require("../common");
var fs_1 = require("fs");
function merge(path1, path2, dest) {
    return new Promise(function (solved, mystery) {
        (0, common_1.apollo)("action  => merging @path1 : ".concat(path1, " @path2 : ").concat(path2, " @dest : ").concat(dest));
        var mergingProcess = (0, child_process_1.spawn)(ffmpeg_static_1.default !== null && ffmpeg_static_1.default !== void 0 ? ffmpeg_static_1.default : 'apollo', [
            '-i', path1,
            '-i', path2,
            '-c', 'copy',
            '-y', dest
        ]);
        mergingProcess.stderr.on('data', function (d) {
            process.env.SHOW_FFMPEG == "APOLLO" ? (0, common_1.apollo)(d.toString()) : '';
        });
        mergingProcess.on('error', function (err) {
            (0, common_1.apollo)("failure => merging @path1 : ".concat(path1, " @path2 : ").concat(path2, " @dest : ").concat(dest));
            var error = {
                boundary: 'merging (external)',
                error: err
            };
            mystery(error);
        });
        mergingProcess.on('exit', function (code) {
            if (code == 0) {
                (0, common_1.apollo)("success => merging @path1 : ".concat(path1, " @path2 : ").concat(path2, " @dest : ").concat(dest));
                var msg = {
                    boundary: 'merging',
                    msg: "merged @path1 : ".concat(path1, " @path2 : ").concat(path2, " @dest : ").concat(dest)
                };
                solved(msg);
            }
            else {
                (0, common_1.apollo)("failure => merging @path1 : ".concat(path1, " @path2 : ").concat(path2, " @dest : ").concat(dest));
                var error = {
                    boundary: 'merging (internal)',
                    error: Error("@code : ".concat(code))
                };
                mystery(error);
            }
        });
    });
}
exports.merge = merge;
function clearCache(path) {
    (0, common_1.apollo)("action  => cache clear @path : ".concat(path));
    return new Promise(function (solved, mystery) {
        (0, fs_1.unlink)(path, function (err) {
            if (err) {
                (0, common_1.apollo)("failure => cache clear @path : ".concat(path));
                var error = {
                    boundary: "cache clear",
                    error: err
                };
                mystery(error);
            }
            (0, common_1.apollo)("success => cache clear @path : ".concat(path));
            var msg = {
                boundary: "cache clear",
                msg: "cache cleared @path : ".concat(path)
            };
            solved(msg);
        });
    });
}
exports.clearCache = clearCache;
