function lpad(num) {
    if(num < 10) return "  "+num;
    if(num < 100) return " "+num;
    return num;
}
let matrix = [];
for(let i = 0; i < 4; i++) {
    let m = [];
    for(let j = 0; j < 5; j++) {
        let n = Math.ceil(Math.random()*100);
        m.push(Math.ceil(n));
        process.stdout.write(lpad(Math.ceil(n)+" "));
    }
    matrix.push(m);
    process.stdout.write("\n");
}
process.stdout.write("\n");
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 4; j++) {
        process.stdout.write(lpad(Math.ceil(matrix[j][i])+" "));
    }
    process.stdout.write("\n");
}
