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
        if(+v % 2 == 0) {
            rl.close();
            console.log("Par");
            return;
        }else if(+v % 2 != 0){
            rl.close();
            console.log("Impar");
            return;
        }
    });
}
readCon();

