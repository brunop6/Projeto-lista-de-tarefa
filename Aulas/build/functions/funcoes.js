"use strict";
let n1 = 10;
let n2 = 25;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    if (soma > 40) {
        return 'SOMA MAIOR QUE 40';
    }
    return 'MENOR QUE 40';
}
console.log(soma(n1, n2));
