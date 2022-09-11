//TYPE ARRAY
//let filmes: Array<string>;
//let filmes: string[];

//ARRAY + UNION TYPE
//let filmes: Array<string | number>;
let filmes: (string | number)[];

filmes = ["Filme 1", "Filme 2"];

filmes.push(15);

console.log("Meus filmes ", filmes);

//let numeros: number[];
//numeros = [1, 3, 45, 50];

//console.log(numeros);

//numeros.push(Number(false));

//console.log("Meus números ", numeros);