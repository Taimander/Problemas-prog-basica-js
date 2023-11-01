const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})
function readCon() {
    rl.question("Ingrese una frase: ", (v) => {
        rl.question("Ingrese un caracter: ", (c) => {
            let cont = 0;
            for (let i = 0; i < v.length; i++) {
                if (v[i] == c) {
                    cont++;
                }
            }
            console.log(`La cantidad de veces que aparece el caracter ${c}: ${cont}`);
            rl.close();
        });
    });
}
readCon();