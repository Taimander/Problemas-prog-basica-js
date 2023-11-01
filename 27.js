function tabla(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
tabla(+process.argv[2]);