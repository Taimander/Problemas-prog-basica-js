function generarDatos() {
    let datos = [];
    for(let rep = 1; rep <= 3; rep++) {
        for(let mes = 1; mes <= 12; mes++) {
            for(let prod = 1; prod <= 4; prod++) {
                datos.push({
                    representante: rep,
                    mes: mes,
                    producto: prod,
                    ventas: Math.floor(Math.random() * 1000)
                });
            }
        }
    }
    return datos;
}

const meses = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Setiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre"
};

let datos = generarDatos();

for(let m = 1; m <= 12; m++) {
    for(let p = 1; p <= 4; p++) {
        console.log(`Total de ventas en ${meses[m]} del producto ${p}: ${
            datos.filter(d => d.mes == m && d.producto == p).reduce((a, b) => a + b.ventas, 0)
        }`);
    }
}
