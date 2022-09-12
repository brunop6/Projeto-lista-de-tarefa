class Usuario{
    protected id: number;
    nome: string;
    email: string;

    constructor(id: number, nome: string, email: string){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class Admin extends Usuario{
    cargo: string;
    nivel: number;

    constructor(id: number, nome: string, email: string, cargo: string, nivel: number){
        //Chamando o construtor da classe pai
        super(id, nome, email);

        this.cargo = cargo;
        this.nivel = nivel;
    }

    protected mudarCargo(cargo: string): void{
        console.log("ALTERANDO CARGO PARA: ", cargo);
        console.log(`ID do Usuário: ${this.id}`);
    }

    acessarAdmin(){
        this.mudarCargo("Designer");
    }
}

const usuario1 = new Admin(123, "Bruno", "bruno@teste.com", "Programador", 2);

usuario1.acessarAdmin();