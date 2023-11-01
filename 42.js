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

async function agregarDato(rl,arrDatos) {
    let id = await rl.question("ID: ");
    let nombre = await rl.question("Nombre: ");
    let apellidos = await rl.question("Apellidos: ");
    let direccion = await rl.question("Dirección: ");
    let estado = await rl.question("Estado: ");
    arrDatos.push(new Dato(id,nombre,apellidos,direccion,estado));
}

async function eliminarDato(rl,arrDatos) {
    let il = arrDatos.length;
    let o = await rl.question("ID a eliminar: ");
    arrDatos = arrDatos.filter((e) => e.ID != o);
    console.log("Se borraron " + (il - arrDatos.length) + " registros.");
    return arrDatos;
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
        console.log("2. Eliminar dato")
        console.log("3. Guardar y salir");
        let r = await rl.question("Opción: ");
        if(r == 1) {
            await agregarDato(rl,arrDatos);
        } else if(r == 2) {
            arrDatos = await eliminarDato(rl,arrDatos);
        }else if(r == 3) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(arrDatos));
            rl.close();
            break;
        }
    }
}

main();

