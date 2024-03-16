


function APOLLO_OUT(arg : any) : void {
    if (process.env.APOLLO_MODE != 'NIGHT') {
        console.log(`APOLLO =:> ${arg}`)
    }
}

export {
    APOLLO_OUT
}

