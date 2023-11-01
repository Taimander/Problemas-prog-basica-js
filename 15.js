const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

function readQ1() {
    rl.question("Ingrese el limite inferior: ", (v) => {
        if(isNaN(+v)) {
            readQ1();
            return;
        }
        readQ2(v);
    });
}

function readQ2(linf) {
    rl.question("Ingrese el limite superior: ", (lsup) => {
        if(isNaN(+lsup)) {
            readQ2(linf);
            return;
        }
        if(linf > +lsup) {
            console.log("El limite inferior no puede ser mayor al limite superior");
            readQ2(linf);
            return;
        }
        let c = 0;
        let cpares = 0;
        let simpares = 0;
        for(let i = linf; i <= +lsup; i++) {
            console.log(i);
            c++;
            if(i % 2 == 0) 
                cpares++;
            if(i % 2 != 0) 
                simpares += i;
        }
        console.log("Cantidad de números: "+c);
        console.log("Cantidad de pares: "+cpares);
        console.log("Suma de impares: "+simpares);
        rl.close();
    });
}

readQ1();