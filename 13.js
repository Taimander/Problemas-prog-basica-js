const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})
let max = -Infinity;
let min = Infinity;
let c = 1;
function readCon() {
    rl.question("Ingrese un número ("+c+"/5): ", (v) => {
        if(isNaN(+v)) {
            readCon();
            return;
        }
        if(+v > max) max = +v;
        if(+v < min) min = +v;
        c++;
        if(c > 5) {
            rl.close();
            console.log("Máximo: "+max);
            console.log("Mínimo: "+min);
            return;
        }
        readCon();
    });
}
readCon();