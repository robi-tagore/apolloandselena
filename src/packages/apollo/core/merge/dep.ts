import ffmpegPath from "ffmpeg-static";
import { spawn } from "child_process";
import { apollo } from "../common";
import { serverErr, serverMsg } from "../../globalTypes";
import { unlink } from 'fs'

function merge(path1: string, path2: string, dest : string) : Promise<serverErr | serverMsg> {
    return new Promise((solved,mystery) => {        
        apollo(`action  => merging @path1 : ${path1} @path2 : ${path2} @dest : ${dest}`)

        var mergingProcess = spawn(ffmpegPath ?? 'apollo',[
            '-i' , path1,
            '-i' , path2,
            '-c' , 'copy',
            '-y' , dest
        ])

        mergingProcess.stderr.on('data',(d : Buffer) => {
            process.env.SHOW_FFMPEG == "APOLLO" ? apollo(d.toString()) : '' 
        })

        mergingProcess.on('error',(err : Error) => {
            apollo(`failure => merging @path1 : ${path1} @path2 : ${path2} @dest : ${dest}`)
            var error : serverErr = {
                boundary : 'merging (external)',
                error : err
            }
            mystery(error)
        })

        mergingProcess.on('exit',(code : number) => {
            if (code == 0) {
                apollo(`success => merging @path1 : ${path1} @path2 : ${path2} @dest : ${dest}`)
                var msg : serverMsg = {
                    boundary : 'merging',
                    msg : `merged @path1 : ${path1} @path2 : ${path2} @dest : ${dest}`
                }
                solved(msg)
            } else {
                apollo(`failure => merging @path1 : ${path1} @path2 : ${path2} @dest : ${dest}`)
                var error : serverErr = {
                    boundary : 'merging (internal)',
                    error : Error(`@code : ${code}`)
                }
                mystery(error)
            }
        })
    })
}

function clearCache(path : string) : Promise<serverErr | serverMsg> {
    apollo(`action  => cache clear @path : ${path}`)
    return new Promise((solved,mystery) => {
        unlink(path,(err) => {
            if (err) {
                apollo(`failure => cache clear @path : ${path}`)
                var error : serverErr = {
                    boundary : `cache clear`,
                    error : err
                }
                mystery(error)
            }
            apollo(`success => cache clear @path : ${path}`)
            var msg : serverMsg = {
                boundary : `cache clear`,
                msg : `cache cleared @path : ${path}`
            }
            solved(msg)
        })
    })
}


export {
    merge,
    clearCache
}
