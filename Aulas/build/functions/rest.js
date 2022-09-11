"use strict";
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você fez ${quantidadeVendas} vendas hoje!`);
}
function mostraNomes(...nomes) {
    let totalNomes = nomes.length;
    console.log(totalNomes);
    nomes.map(nome => {
        console.log(nome);
    });
}
mostraNomes("Natan", "Lucas", "Sujeito", "Henrique", "Ana");
