type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

type Categoria = {
    slug: string;
    quantidadeProduto: number;
}

type ProdutoInfo = Info & Categoria;

const produtoInfo: Info = {
    id: 123,
    nome: "Placa de Vídeo",
    //descricao: "Placa GTX 2090"
}

const categoria1: Categoria = {
    slug: "Hardware",
    quantidadeProduto: 2
}

const novoProduto: ProdutoInfo = {
    id: 54321,
    nome: "Teclado RGB",
    slug: "teclado-mecanico",
    quantidadeProduto: 10
}

console.log(novoProduto);