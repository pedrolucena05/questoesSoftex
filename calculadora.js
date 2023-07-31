
function calculadora(n1, n2, op) {
    let res;
    if (op == "x" || op == "*") {
        res = n1*n2; 
    }
    else if (op == "+") {
        res = n1 + n2;
    }
    else if (op == "-") {
        res = n1 - n2;
    }
    else if (op == "/") {
        res = n1/n2;
    }
    else {
        return 0;
    }
    return res;
}

let n1 = parseInt(prompt("Numero 1:"));
let n2 = parseInt(prompt("Numero 2:"));
let op = prompt("Operacao:");

let resultado = parseFloat(calculadora(n1, n2, op));

alert("Resultado: " + resultado);