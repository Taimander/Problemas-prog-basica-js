const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

function readCon() {
    let cont = 0;
    rl.question("Ingrese una frase: ", (v) => {
        for(let i = 0; i < 5; i++) {
            let sb = "";
            for(let j = 0; j < cont; j++) {
                sb += "    ";
            }
            sb += v;
            cont++;
            console.log(sb);
        }
    });
}
readCon();