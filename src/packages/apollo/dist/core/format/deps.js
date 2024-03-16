"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettify = void 0;
function neededsOnly(formats) {
    var selected = [];
    formats.forEach(function (f) {
        selected.push({
            approxDurationMs: f.approxDurationMs,
            audioBitrate: f.audioBitrate,
            audioCodec: f.audioCodec,
            videoCodec: f.videoCodec,
            container: f.container,
            contentLength: f.contentLength,
            fps: f.fps,
            hasAudio: f.hasAudio,
            hasVideo: f.hasVideo,
            itag: f.itag,
            height: f.height,
            width: f.width,
        });
    });
    return selected;
}
function compose(formats, title) {
    var onlyVideo = formats.filter(function (f) { return f.hasVideo && !f.hasAudio; });
    var onlyAudio = formats.filter(function (f) { return !f.hasVideo && f.hasAudio; });
    var standAlone = formats.filter(function (f) { return f.hasVideo && f.hasAudio; });
    var complex = [];
    var allFormats = [];
    onlyVideo.forEach(function (v) {
        onlyAudio.forEach(function (a) {
            if (a.container == v.container) {
                complex.push({ v: v, a: a });
            }
        });
    });
    onlyAudio.forEach(function (a) {
        allFormats.push({
            media: "a",
            formatType: "alone",
            itags: a.itag,
            ext: a.container,
            title: title,
            spec: a,
        });
    });
    standAlone.forEach(function (s) {
        allFormats.push({
            media: "v",
            formatType: "alone",
            itags: s.itag,
            ext: s.container,
            title: title,
            spec: s,
        });
    });
    complex.forEach(function (c) {
        allFormats.push({
            media: "v",
            formatType: "not alone",
            itags: [c.v.itag, c.a.itag],
            ext: c.v.container,
            title: title,
            spec: {
                approxDurationMs: c.v.approxDurationMs,
                audioBitrate: c.a.audioBitrate,
                audioCodec: c.a.audioCodec,
                videoCodec: c.v.videoCodec,
                container: c.a.container,
                contentLength: (Number(c.v.contentLength) + Number(c.a.contentLength)).toString(),
                fps: c.v.fps,
                hasAudio: c.a.hasAudio,
                hasVideo: c.v.hasVideo,
                height: c.v.height,
                width: c.v.width,
                itag: [c.v.itag, c.a.itag],
            },
        });
    });
    return allFormats;
}
function prettify(formats, title) {
    var filtered = neededsOnly(formats);
    var composed = compose(filtered, title);
    return composed;
}
exports.prettify = prettify;
