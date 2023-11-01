const readline = require("readline/promises")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

async function asignaturas() {
    let arr = [];
    for(let i = 1; i <= 10; i++) {
        let r = await rl.question(`Calificación (${i}/10): `);
        arr.push(+r);
    }
    while(true) {
        let r = await rl.question("Calif. a buscar (fin para salir): ");
        if(r === "fin") break;
        let n = +r;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === n) {
                console.log(`Calificación (${i+1}/10): ${arr[i]}`);
            }
        }
    }

    rl.close();
}

asignaturas();