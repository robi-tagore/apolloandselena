import ytdl, { videoFormat, videoInfo } from "ytdl-core";
import ytdlInfoResponse from "./offline";
import { complexVideoFormat, revisedFormat, selectedPropOnly } from "./type";

function neededsOnly(formats: videoFormat[]) {
  var selected: Array<selectedPropOnly> = [];
  formats.forEach((f: videoFormat) => {
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

function compose(formats: selectedPropOnly[], title : string): revisedFormat[] {
  var onlyVideo: Array<selectedPropOnly> = formats.filter(
    (f: selectedPropOnly) => f.hasVideo && !f.hasAudio
  );
  var onlyAudio: Array<selectedPropOnly> = formats.filter(
    (f: selectedPropOnly) => !f.hasVideo && f.hasAudio
  );
  var standAlone: Array<selectedPropOnly> = formats.filter(
    (f: selectedPropOnly) => f.hasVideo && f.hasAudio
  );

  var complex: Array<complexVideoFormat> = [];
  var allFormats: revisedFormat[] = [];

  onlyVideo.forEach((v) => {
    onlyAudio.forEach((a) => {
      if (a.container == v.container) {
        complex.push({ v: v, a: a });
      }
    });
  });

  onlyAudio.forEach((a) => {
    allFormats.push({
      media: "a",
      formatType: "alone",
      itags: a.itag,
      ext : a.container,
      title:title,
      spec: a,
    });
  });

  standAlone.forEach((s) => {
    allFormats.push({
      media: "v",
      formatType: "alone",
      itags: s.itag,
      ext : s.container,
      title:title,
      spec: s,
    });
  });

  complex.forEach((c) => {
    allFormats.push({
      media: "v",
      formatType: "not alone",
      itags: [c.v.itag, c.a.itag],
      ext:c.v.container,
      title:title,
      spec: {
        approxDurationMs: c.v.approxDurationMs,
        audioBitrate: c.a.audioBitrate,
        audioCodec: c.a.audioCodec,
        videoCodec: c.v.videoCodec,
        container: c.a.container,
        contentLength: (
          Number(c.v.contentLength) + Number(c.a.contentLength)
        ).toString(),
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

function prettify(formats: videoFormat[],title : string) {
  
  var filtered = neededsOnly(formats);
  var composed = compose(filtered,title);

  return composed;
}

export { prettify };
