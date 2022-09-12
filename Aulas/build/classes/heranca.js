"use strict";
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log("ALTERANDO CARGO PARA: ", cargo);
        console.log(`ID do Usuário: ${this.id}`);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const usuario1 = new Admin(123, "Bruno", "bruno@teste.com", "Programador", 2);
usuario1.acessarAdmin();
