const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

function readCon() {
    rl.question("Ingrese un número: ", (v) => {
        if(isNaN(+v)) {
            readCon();
            return;
        }
        for(let i = 1; i <= +v; i++){
            if(i % 3 == 0) {
                console.log(i);
            }
        }
        rl.close();
    });
}
readCon();

