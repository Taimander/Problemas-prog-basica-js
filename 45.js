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
        let id = await rl.question("ID (vacio para salir): ");
        if(id === '') {
            rl.close();
            break;
        }
        let dato = arrDatos.find((e) => e.ID == id);
        if(!dato) {
            console.log("No existe el registro con ese ID.");
            continue;
        }
        console.log("ID: " + dato.ID);
        console.log("  - Nombre: " + dato.NOMBRE);
        console.log("  - Apellidos: " + dato.APELLIDOS);
        console.log("  - Dirección: " + dato.DIRECCION);
        console.log("  - Estado: " + dato.ESTADO);
    }
}

main();
