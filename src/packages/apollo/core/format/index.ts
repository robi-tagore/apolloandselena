import ytdl from "ytdl-core";
import { prettify } from "./deps";

import { serverErr } from "../../globalTypes";
import { apollo } from "../common";
import { resolvedFormats } from "./type";
import ytdlInfoResponse from "./offline";

async function loadFormats(url: string): Promise<resolvedFormats> {
  apollo(`action  => loading formats @url : ${url}`);
  return await ytdl.getInfo(url).then(
    (videoInfo) => {
      apollo(`success => loading formats @url : ${url}`); // debug
      var title = videoInfo.videoDetails.title;
      var formats = videoInfo.formats;

      // formats = ytdlInfoResponse.formats;

      return {
        title: title,
        url: url,
        available: prettify(formats, title),
      };
    },
    (err) => {
      if (process.env.OFFLINE == "APOLLO") {
        var videoInfo = ytdlInfoResponse.formats;
        var title = videoInfo.videoDetails.title;
        var formats = videoInfo.formats;

        return {
          title: title,
          url: url,
          available: prettify(formats, title),
        };
      }

      apollo(`failure => loading formats @url : ${url}`);
      var error: serverErr = {
        boundary: "loading formats",
        error: err,
      };
      return Promise.reject(error);
    }
  );
}

// (async () => {
//   loadFormats("watch?v=RWnFowWtT78").then(
//     (v : any) => {
//       console.log(JSON.stringify(v), "as resolve");
//     },
//     (e : any) => {
//       console.log(e, "as err");
//     }
//   );
// })();

export { loadFormats };
