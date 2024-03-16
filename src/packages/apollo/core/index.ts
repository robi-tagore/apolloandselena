import { apollo, uniqueId } from "./common";
import { downloadAndSave } from "./download";
import { loadFormats } from "./format";
import { revisedFormat, selectedPropOnly } from "./format/type";
import { mergeFiles } from "./merge/index";
import { readFile } from 'fs'


async function getDistributeAble(url: string, format : revisedFormat) {

    apollo(`internal server request => get distributable @url : ${url} \n ==> starred`)
    try {
        if (format.formatType == 'alone') {
            var itag : any = format.itags
            var unId : string = uniqueId();
            var finalDest : string = `storage/${unId}.${format.ext}`;
            await downloadAndSave(url,itag,finalDest)
            apollo(`internal server request => get distributable @url : ${url} \n ==> success`)
            return finalDest
        } else if (format.formatType == 'not alone' && Array.isArray(format.itags)) {

            var itag1 : number = format.itags[0];
            var itag2 : number = format.itags[1];
            var unId : string = uniqueId();

            var fileDest1 : string = `storage/${unId}${itag1}.${format.ext}`;
            var fileDest2 : string = `storage/${unId}${itag2}.${format.ext}`;
            var finalDest : string = `storage/${unId}.${format.ext}`;

            await downloadAndSave(url,itag1,fileDest1)
            await downloadAndSave(url,itag2,fileDest2)
            await mergeFiles(fileDest1,fileDest2,finalDest)
            
            apollo(`internal server request => get distributable @url : ${url} \n ==> success`)
            return finalDest
        }      
    } catch (error) {
        apollo(`internal server request => get distributable @url : ${url} \n ==> failure`)
        return Promise.reject(error)
    }
}


async function getFormats(url : string) {
    apollo(`internal server request => get formats @url : ${url} \n ==> starred`)
    try {
        var formats = await loadFormats(url)
        apollo(`internal server request => get formats @url : ${url} \n ==> success`)        
        return Promise.resolve(formats)
    } catch (error) {
        apollo(`internal server request => get formats @url : ${url} \n ==> failure`)
        return Promise.reject(error)
    }
}

export {
    getDistributeAble,
    getFormats
}

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
