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

async function modificarDato(rl, arrDatos) {
    let id = await rl.question("ID del dato a modificar: ");
    let dato = arrDatos.find((e) => e.ID == id);
    if(!dato) {
        console.log("No existe un dato con ese ID.");
        return;
    }
    while(true) {
        console.log("1. Nombre");
        console.log("2. Apellidos");
        console.log("3. Dirección");
        console.log("4. Estado");
        console.log("5. Salir");
        let r = await rl.question("Opción: ");
        if(r == 1) {
            dato.NOMBRE = await rl.question(`Nombre (actual: ${dato.NOMBRE}): `);
        } else if(r == 2) {
            dato.APELLIDOS = await rl.question(`Apellidos (actual: ${dato.APELLIDOS}): `);
        } else if(r == 3) {
            dato.DIRECCION = await rl.question(`Dirección: (actual: ${dato.DIRECCION}) `);
        } else if(r == 4) {
            dato.ESTADO = await rl.question(`Estado (actual: ${dato.ESTADO}): `);
        } else if(r == 5) {
            break;
        }
    }
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
        console.log("2. Modificar dato")
        console.log("3. Eliminar dato")
        console.log("4. Guardar y salir");
        let r = await rl.question("Opción: ");
        if(r == 1) {
            await agregarDato(rl,arrDatos);
        } else if(r == 2) {
            await modificarDato(rl,arrDatos);
        }else if(r == 3) {
            arrDatos = await eliminarDato(rl,arrDatos);
        }else if(r == 4) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(arrDatos));
            rl.close();
            break;
        }
    }
}

main();

