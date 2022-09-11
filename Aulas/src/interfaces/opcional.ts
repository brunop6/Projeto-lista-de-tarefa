interface CadastroProps{
    nome?: string;
    email: string;
    status: boolean;
}

const newUser: CadastroProps = {
    email: "bruno@teste.com",
    status: true
}

console.log(newUser);

function novoUser(usuario: CadastroProps){
    console.log(usuario.email);
}

novoUser({ email: "ana@ana.com", status: false});