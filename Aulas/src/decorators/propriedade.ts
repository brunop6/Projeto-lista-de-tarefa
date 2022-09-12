function validaNome(tamanho: number){
    return (target: any, key: string) => {
        let valor = target[key];

        const getter = () => valor;

        const setter = (value: string) => {
            if(value === ""){
                console.log("Você não pode deixar em branco");
            }else if(value.length < tamanho){
                console.log("Você não pode criar com esse tamanho");
            }else{
                valor = value;
            }
        } 

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Jogo1{
    @validaNome(5)
    nome: string;
    
    @validaNome(15)
    titulo: string;

    constructor(nome: string, titulo: string){
        this.nome = nome;
        this.titulo = titulo;
    }
}

const jogo1 = new Jogo1("GTA 5 Online", "Jogo online");

console.log(jogo1.titulo);