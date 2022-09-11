//function login(username: string): boolean | string{
    //let message = `Bem vindo ${username}`;
    //console.log(message);

    //return username;
//}

//const retornoFuncao = login("Sujeito Programador");

//console.log(retornoFuncao);

let n1: number = 10;
let n2: number = 25;

function soma(valor1:number , valor2: number): string{
    let soma = valor1 + valor2;

    if(soma > 40){
        return 'SOMA MAIOR QUE 40';
    }
    return 'MENOR QUE 40';
}

console.log(soma(n1, n2));