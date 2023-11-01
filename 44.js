const fs = require('fs');
const readline = require("readline/promises")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

async function main() {
    if(!fs.existsSync('./DATOS.DAT')) {
        fs.writeFileSync('./DATOS.DAT', '[]');
    }
    const datos = fs.readFileSync('./DATOS.DAT', 'utf8');
    let arrDatos = JSON.parse(datos);
    while(true) {
        console.log("Filtrar por:");
        console.log("1) ID");
        console.log("2) Nombre");
        console.log("3) Apellidos");
        console.log("4) Dirección");
        console.log("5) Estado");
        console.log("6) Salir");
        let f = await rl.question("Filtro: ");
        let filtrado = [];
        if(f == 1) {
            let o = await rl.question("ID: ");
            filtrado = arrDatos.filter((e) => e.ID == o);
        } else if(f == 2) {
            let o = await rl.question("Nombre: ");
            filtrado = arrDatos.filter((e) => e.NOMBRE == o);
        } else if(f == 3) {
            let o = await rl.question("Apellidos: ");
            filtrado = arrDatos.filter((e) => e.APELLIDOS == o);
        } else if(f == 4) {
            let o = await rl.question("Dirección: ");
            filtrado = arrDatos.filter((e) => e.DIRECCION == o);
        } else if(f == 5) {
            let o = await rl.question("Estado: ");
            filtrado = arrDatos.filter((e) => e.ESTADO == o);
        } else if(f == 6) {
            rl.close();
            break;
        }
        filtrado.forEach(d => {
            console.log("ID: " + d.ID);
            console.log("  - Nombre: " + d.NOMBRE);
            console.log("  - Apellidos: " + d.APELLIDOS);
            console.log("  - Dirección: " + d.DIRECCION);
            console.log("  - Estado: " + d.ESTADO);
        });
    }
}

main();
