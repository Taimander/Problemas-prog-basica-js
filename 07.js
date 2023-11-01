const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})
let suma = 0;
function readCon() {
    rl.question("Frase (Vacío para terminar): ", (v) => {
        if(v === '') {
            rl.close();
            console.log("Total de frases: " + suma);
            return;
        }
        suma++;
        readCon();
    });
}
readCon();

