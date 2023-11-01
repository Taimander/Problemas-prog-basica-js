let c = 0;

for(let i = 1; i <= 100; i++) {
    if(i % 2 == 0 || i % 3 == 0) c++;
    console.log(i);
}
console.log("Conteo: "+c);
