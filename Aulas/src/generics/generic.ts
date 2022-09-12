/**
Alguns padrões:
S -> state;
T -> type;
K -> key;
V -> value;
E -> element;
 */
function repositorio<T extends number | string>(){
    let dados: T;

    function getDados(){
        return dados;
    }

    function setDados(novoDado: T){
        dados = novoDado;
    }

    return { getDados, setDados }
}

const repo1 = repositorio<string | number>();

repo1.setDados(15);
repo1.setDados("15");


console.log(repo1.getDados());