import { applyMixins } from './mixin/applyMixin';

class Automovel{
    ligar(): void{
        console.log("Automovel ligado com sucesso!");
    }

    desligar(): void{
        console.log("Desligando automovel");
    }
}

class Especificacao{
    descricao: string;

    constructor(descricao: string){
        this.descricao = descricao;
    }
}

class Carro{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

interface Carro extends Automovel, Especificacao{ }

applyMixins(Carro, [Automovel, Especificacao]);

const gol = new Carro("Gol 1.6");

gol.ligar();

gol.descricao = "Modelo completo automático";

console.log(gol);

gol.desligar();