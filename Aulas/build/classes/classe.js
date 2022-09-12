"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO!");
        }
        else {
            console.log("LOJA FECHADA!");
        }
    }
}
const redBurguer = new Loja("Red Burguer", "lanches");
redBurguer.mudarStatus("FECHADO");
