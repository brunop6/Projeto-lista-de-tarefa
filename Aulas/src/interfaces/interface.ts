//let loja: object;
//
//loja = {
//    nome: "BK",
//    endereco: "Rua X",
//    status: true
//}

interface LojaProps{
    nome: string;
    endereco: string;
    status: boolean;
}

const BurguerK: LojaProps = {
    nome: "BurguerK",
    endereco: "Rua logo ali",
    status: true,
}

//console.log(BurguerK);

function novaLoja({nome, endereco, status}: LojaProps): void{
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja: ${endereco}`);
    console.log(`Status da loja: ${status}`);
    console.log("====================");
}

novaLoja({nome: "Red Burguer", endereco: "Rua X", status: false});
novaLoja({nome: "Subway", endereco: "Rua dez", status: true});