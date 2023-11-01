function isPrime(num) {
    if(num % 2 == 0 || num % 3 == 0) return "No es primo";
    let sq = Math.sqrt(num);
    for(let i = 5; i <= sq; i += 2) {
        if(num % i == 0) return "No es primo";
    }
    return "Si es primo";
}

console.log(isPrime(process.argv[2]));
