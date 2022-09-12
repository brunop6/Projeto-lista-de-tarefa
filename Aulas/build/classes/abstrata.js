"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("======================");
        console.log(`Nova conta P. Física criada com sucesso ${dados.nome}`);
        console.log("======================");
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("======================");
        console.log(`Nova conta P. Jurídica criada com sucesso ${dados.nome}`);
        console.log("======================");
        return true;
    }
}
const joana = new PessoaFisica();
joana.abrirConta({
    nome: "Joana Silva",
    numero: "1020-x",
    endereco: "Rua 15, bairro centro"
});
const sujeitoprogramador = new PessoaJuridica();
sujeitoprogramador.abrirConta({
    nome: "Bruno Peres",
    numero: "0302-x",
    endereco: "Rua 20, bairro centro"
});
