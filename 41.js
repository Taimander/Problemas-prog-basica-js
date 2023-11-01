const fs = require('fs');
const readline = require("readline/promises")

class Dato {
    ID;
    NOMBRE;
    APELLIDOS;
    DIRECCION;
    ESTADO;
    constructor(ID,NOMBRE,APELLIDOS,DIRECCION,ESTADO) {
        this.ID = ID;
        this.NOMBRE = NOMBRE;
        this.APELLIDOS = APELLIDOS;
        this.DIRECCION = DIRECCION;
        this.ESTADO = ESTADO;
    }
}

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
        console.log("1. Agregar dato");
        console.log("2. Guardar y salir");
        let r = await rl.question("Opción: ");
        if(r == 1) {
            let id = await rl.question("ID: ");
            let nombre = await rl.question("Nombre: ");
            let apellidos = await rl.question("Apellidos: ");
            let direccion = await rl.question("Dirección: ");
            let estado = await rl.question("Estado: ");
            arrDatos.push(new Dato(id,nombre,apellidos,direccion,estado));
        } else if(r == 2) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(arrDatos));
            rl.close();
            break;
        }
    }
}

main();

