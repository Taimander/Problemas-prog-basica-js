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
    let p = arr.reduce((n1,n2) => n1+n2,0);
    console.log(p/arr.length);
    rl.close();
}

asignaturas();