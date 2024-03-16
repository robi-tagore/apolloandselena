


interface serverErrS {
    boundary : string,
    error : Error,
}

interface serverErr {
    boundary : string,
    error : Error | serverErrS,
}

interface serverMsgS {
    boundary : string,
    msg : string,
}

interface serverMsg {
    boundary : string,
    msg : string | serverMsgS | serverMsg,
}

export {
    serverErr,
    serverMsg
}





