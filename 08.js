const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

function readCon() {
    rl.question("Ingrese S/N: ", (v) => {
        if(v === 'S' || v === 'N') {
            rl.close();
            console.log("Ingresó: " + v);
            return;
        }
        readCon();
    });
}
readCon();

