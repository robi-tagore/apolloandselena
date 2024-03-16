
import { serverErr, serverMsg } from "../../globalTypes";
import { apollo } from "../common";
import { createFileForWritting } from "../download/deps";
import { clearCache, merge } from "./dep";




async function mergeFiles(path1 : string, path2 : string, dest : string) {
    
    apollo(`apollo action  => merging request @path1 : ${path1} @path2 : ${path2} @dest : ${dest}`)

    try {
        
        await createFileForWritting(dest)
        await merge(path1,path2,dest)
        await clearCache(path1)
        await clearCache(path2)

        apollo(`apollo success => merging request @path1 : ${path1} @path2 : ${path2} @dest : ${dest}`)
        var msg : serverMsg = {
            boundary : 'merging request',
            msg : `merged requested @path1 : ${path1} @path2 : ${path2} @dest : ${dest}`
        }
        return Promise.resolve(msg)

    } catch (err : any) {
        apollo(`apollo failure => merging request @path1 : ${path1} @path2 : ${path2} @dest : ${dest}`)
        var error : serverErr = {
            boundary : 'merging request',
            error : err
        }
        return Promise.reject(error)
    }

}

// mergeFiles('./storage/aud.mp4','./storage/vid.mp4','./storage/comb.mp4')

export {
    mergeFiles
}

