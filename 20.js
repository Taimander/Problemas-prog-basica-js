function factorial(n) {
    if(n == 1) return 1;
    return factorial(n - 1) * n;
}

console.log(factorial(+process.argv[2]));