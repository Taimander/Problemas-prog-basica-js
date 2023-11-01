const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

function menu(n1,n2) {
    console.log("1) Sumar");
    console.log("2) Restar");
    console.log("3) Multiplicar");
    console.log("4) Dividir");
    console.log("5) Salir");
    rl.question("Opcion: ", (ans) => {
        switch(ans) {
            case "1":
                console.log(n1+n2);
                menu(n1,n2);
                break;
            case "2":
                console.log(n1-n2);
                menu(n1,n2);
                break;
            case "3":
                console.log(n1*n2);
                menu(n1,n2);
                break;
            case "4":
                console.log(n1/n2);
                menu(n1,n2);
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Opcion no valida");
                menu(n1,n2);
                break;
        }
    });
}

function readCon() {
    rl.question("Ingrese un número: ", (n1) => {
        rl.question("Ingrese otro número: ", (n2) => {
            menu(+n1,+n2);
        });
    });
}

readCon();