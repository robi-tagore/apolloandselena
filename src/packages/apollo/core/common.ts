


function apollo(...args : any) : void {
    if (process.env.MODE == 'APOLLO') {
        console.debug(...args)
    }
}

function uniqueId() {
    var part1 = Date.now().toString()
    var part2 = (Math.random()*13169).toString().replace('.','')
    return part1 + part2
}

function validateTitle(title : string, using : string = ' _ ') {
    var disallowed = ['/', '\\',':','*','?','\"','<','>','|',':']
    disallowed.forEach((n) => {
        title = title.replaceAll(n,using)
    })
    return title
}

export {
    apollo,
    uniqueId
}


