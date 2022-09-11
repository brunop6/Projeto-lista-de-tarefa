"use strict";
const BurguerK = {
    nome: "BurguerK",
    endereco: "Rua logo ali",
    status: true,
};
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja: ${endereco}`);
    console.log(`Status da loja: ${status}`);
    console.log("====================");
}
novaLoja({ nome: "Red Burguer", endereco: "Rua X", status: false });
novaLoja({ nome: "Subway", endereco: "Rua dez", status: true });
