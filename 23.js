let columnas = process.argv[2];

function lpad(num) {
    if(num < 10) return "  "+num;
    if(num < 100) return " "+num;
    return num;
}

let cnum = 0;
let max = 100;

while(cnum <= max) {
    let sb = "";
    for(let j = 0; j < columnas; j++) {
        if(cnum <= max) {
            sb += lpad(cnum) + " ";
            cnum++;
        }else{
            break;
        }
    }
    console.log(sb);
}