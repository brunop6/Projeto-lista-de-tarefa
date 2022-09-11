//function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number{
//    const total = venda1 + venda2 + venda3 + venda4;
//
//    console.log(total);
//
//    return total;
//}
//
//totalVendas(10, 20, 50, 30);

function totalVendas(...vendas: number[]){
    const quantidadeVendas = vendas.length;

    console.log(`Você fez ${quantidadeVendas} vendas hoje!`);
}

//totalVendas(10, 30, 25, 15, 90, 30);

function mostraNomes(...nomes: string[]){
    let totalNomes = nomes.length;
    console.log(totalNomes);

    nomes.map( nome => {
        console.log(nome);
    });
}

mostraNomes("Natan", "Lucas", "Sujeito", "Henrique", "Ana");