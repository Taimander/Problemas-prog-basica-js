let n1 = +process.argv[2];
let n2 = +process.argv[3];

if(isNaN(n1) || isNaN(n2)) {
    console.log("Los argumentos deben ser números");
    process.exit();
}
if(n1 > n2) {
    console.log("El primer argumento debe ser menor al segundo");
    process.exit();
}
let c = 0;
let s = 0;
for(let i = n1; i <= n2; i++) {
    if(i%2 == 0) {
        console.log(i);
        c++;
        s += i;
    }
}
console.log("Cantidad de pares: "+c);
console.log("Suma de pares: "+s);