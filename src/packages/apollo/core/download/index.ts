import { serverMsg, serverErr } from "../../globalTypes";
import { apollo } from "../common";
import {
  downloadStream,
  createFileForWritting,
  resolveStreamDest,
  writeBuffer,
} from "./deps";

async function downloadAndSave(
  url: string,
  itag: number,
  dest: string
): Promise<serverMsg | serverErr> {
  apollo(
    `apollo action  => download operation @itag ${itag} @dest : ${dest} @url : ${url} `
  );

  try {
    var stream = await downloadStream(url, itag);
    await createFileForWritting(dest);
    var finalDest = await resolveStreamDest(dest);
    await writeBuffer(stream, finalDest);

    apollo(
      `apollo success => download operation @itag ${itag} @dest : ${dest} @url : ${url} `
    );
    var msg: serverMsg = {
      boundary: "download operation",
      msg: `downloaded @itag ${itag} @dest : ${dest} @url : ${url} `,
    };

    return Promise.resolve(msg);
  } catch (err: any) {
    apollo(
      `apollo failure => download operation @itag ${itag} @dest : ${dest} @url : ${url} `
    );

    var error: serverErr = {
      boundary: "download operation",
      error: err,
    };
    return Promise.reject(error);
  }
}




// var url = "https://www.youtube.com/watch?v=RWnFowWtT78";
// var itag = 137;
// var dest = "storage/out.mp4";

// (async () => {
//   console.log(await downloadAndSave(url, itag, dest));
// })();


export { downloadAndSave };
