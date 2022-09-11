let statusAtual: unknown = 1;
let mudaStatus: number = 0;

//Afirmando que a variavel é de fato um número
mudaStatus = statusAtual as number;
mudaStatus = <number>statusAtual;

console.log(mudaStatus);

let query: unknown = "Pizza";
let searchTerm: string = query as string;

console.log("Search term:", searchTerm);