function dado() {
    return Math.floor(Math.random() * 6) + 1;
}

let t = 0;
for(let i = 0; i < 100; i++) {
    if(dado()+dado()==10) {
        t++;
    }
}
console.log(t);