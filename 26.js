const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})
function readCon() {
    rl.question("Ingrese una frase: ", (v) => {
        console.clear();
        let conwidth = process.stdout.columns;
        let conheight = process.stdout.rows;
        let xstart = Math.floor((conwidth - v.length) / 2);
        let ystart = Math.floor(conheight / 2);
        for(let i = 1; i < ystart; i++) {
            console.log("");
        }
        for(let i = 1; i < xstart; i++) {
            process.stdout.write(" ");
        }
        console.log(v);
        rl.close();
    });
}

readCon();