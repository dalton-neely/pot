const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lineCount = 0
let maxLine = 0
let sum = 0

const sumItUp = x => {
    const offest = x.length - 1
    const pow = parseInt(x.charAt(offest),10)
    const num = parseInt(x.substr(0,offest),10)
    sum += Math.pow(num,pow)
}

rl.on('line', input => {
    lineCount++
    if(lineCount === 1)
        maxLine = parseInt(input,10)
    else{
        sumItUp(input)
        if(lineCount === maxLine + 1){
            console.log(sum)
            rl.close()
        }
    }
})