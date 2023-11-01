function toRomanNumber(num) {
    let roman = "";
    let romanNumbers = ["I", "V", "X", "L", "C", "D", "M"];
    let romanNumbersValue = [1, 5, 10, 50, 100, 500, 1000];
    let i = romanNumbersValue.length - 1;
    while(num > 0) {
        if(num >= romanNumbersValue[i]) {
            roman += romanNumbers[i];
            num -= romanNumbersValue[i];
        } else {
            i--;
        }
    }
    return roman;
}

console.log(toRomanNumber(+process.argv[2]));