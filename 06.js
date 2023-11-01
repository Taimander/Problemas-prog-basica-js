const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

rl.question("Maximo: ", (max) => {
    for(let i = 1; i <= +max; i++){
        console.log(i);
    }
    rl.close();
})