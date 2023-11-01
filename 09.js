const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

function readCon() {
    rl.question("Ingrese un número: ", (v) => {
        if(+v >= 0) {
            rl.close();
            console.log("Positivo");
            return;
        }else if(+v < 0){
            rl.close();
            console.log("Negativo");
            return;
        }
        readCon();
    });
}
readCon();

