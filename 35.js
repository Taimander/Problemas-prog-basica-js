function lpad(num) {
    if(num < 10) return "  "+num;
    if(num < 100) return " "+num;
    return num;
}

for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 5; j++) {
        process.stdout.write(lpad(Math.ceil(Math.random()*100))+" ");
    }
    process.stdout.write("\n");
}