let c = 0;
for(let i = 1; i <= 100; i++) {
    if(i % 2 != 0) {
        c++;
        console.log(i);
    }
}
console.log("Total de números impares: " + c);