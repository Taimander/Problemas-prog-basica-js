let spares = 0;
let simpares = 0;
for(let i = 1; i <= 1000; i++) {
    if(i % 2 == 0) {
        spares+=i;
    } else {
        simpares+=i;
    }
}
console.log("La suma de los pares es: " + spares);
console.log("La suma de los impares es: " + simpares);