function lpad(num) {
    if(num < 10) return "  "+num;
    if(num < 100) return " "+num;
    return num;
}

let tabla = [[],[],[]];
let contador = 1;
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 4; j++){
        tabla[i][j] = [0,0,0,0,0];
        for(let k = 0; k < 5; k++){
            tabla[i][j][k] = contador++;
        }
    }
}
for(let pagina of tabla){
    console.log("");
    for(let filas of pagina){
        let sb = "";
        for(let columnas of filas){
            sb += lpad(columnas) + " ";
        }
        console.log(sb);
    }
}