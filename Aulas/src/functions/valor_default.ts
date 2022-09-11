//Valor default ou opcional
function cadastro(email: string, senha: string, nome = "Aluno", idade?: number): void{
    let data = {email, senha, nome, idade};

    console.log(data);
}

cadastro("teste@teste.com", "123123");