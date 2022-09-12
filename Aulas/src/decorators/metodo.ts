import { verificaPessoa } from './verificaPessoa'

class Pessoa1{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    @verificaPessoa(16)
    cadastrarPessoa(){
        console.log(`Bem vindo ${this.nome} ao sistema.`);
    }
}

const pessoa1 = new Pessoa1("Bruno P");

pessoa1.cadastrarPessoa();