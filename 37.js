const readline = require("readline/promises")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

async function main() {
    let ccursos = await rl.question("Cantidad de cursos: ");
    let calumnos = await rl.question("Cantidad de alumnos: ");
    let alumnos = [];
    for(let i = 0; i < +calumnos; i++) {
        let notas = [];
        for(let j = 0; j < +ccursos; j++) {
            let nota = await rl.question("Nota "+(j+1)+" del alumno "+(i+1)+": ");
            notas.push(+nota);
        }
        alumnos.push(notas);
    }
    rl.close();
}

main();