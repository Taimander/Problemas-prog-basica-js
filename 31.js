const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

function tabla(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

function isPrime(num) {
    if(num % 2 == 0 || num % 3 == 0) return "No es primo";
    let sq = Math.sqrt(num);
    for(let i = 5; i <= sq; i += 2) {
        if(num % i == 0) return "No es primo";
    }
    return "Si es primo";
}

function factorial(n) {
    if(n == 1) return 1;
    return factorial(n - 1) * n;
}

function menu(n1) {
    console.log("1) Comprobar si es primo");
    console.log("2) Obtener factorial");
    console.log("3) Tabla de multiplicar");
    console.log("4) Salir");
    rl.question("Opcion: ", (ans) => {
        switch(ans) {
            case "1":
                console.log(isPrime(n1));
                menu(n1);
                break;
            case "2":
                console.log(factorial(n1));
                menu(n1);
                break;
            case "3":
                tabla(n1);
                menu(n1);
                break;
            case "4":
                rl.close();
                break;
            default:
                console.log("Opcion no valida");
                menu(n1);
                break;
        }
    });
}

function readCon() {
    rl.question("Ingrese un número: ", (num) => {
        menu(+num);
    });
}

readCon();