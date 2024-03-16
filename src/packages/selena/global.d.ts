import { videoFormat } from "ytdl-core";
import { serverErr } from "../../globalTypes";

interface selectedPropOnly {
  approxDurationMs: any;
  audioBitrate: any;
  audioCodec: any;
  videoCodec: any;
  container: any;
  contentLength?: any;
  fps?: any;
  hasAudio: any;
  hasVideo: any;
  itag?: any;
  height?: any;
  width?: any;
  UIVID?:any
}

interface complexVideoFormat {
  a: selectedPropOnly;
  v: selectedPropOnly;
}

interface revisedFormat {
  media: "v" | "a";
  formatType: "alone" | "not alone";
  itags: Array<number> | number;
  ext : string;
  title: string;
  spec: selectedPropOnly;
}


interface resolvedFormats {
  title : string,
  url : string,
  available : revisedFormat[]
}



interface loadFormatServerResponse {
  condition : 'APOLLO' | "NIGHT"
  data : serverErr | resolvedFormats
}

interface loadFormatServerRequest {
  url : string
}


interface downloadServerRequest {
    format : revisedFormat,
    url : string,
}



export {
  complexVideoFormat,
  revisedFormat,
  selectedPropOnly,
  resolvedFormats,
  loadFormatServerRequest,
  loadFormatServerResponse,
  downloadServerRequest
}