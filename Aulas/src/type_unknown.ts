let total: unknown;

total = 100;
total = "350";
total = {
    total: 100
}

let idPedido: any = 123;
let totalPedido: unknown = 15;
let entregador: number = idPedido;

//Valores do tipo UNKNOWN só podem ser atribuidos ao tipo UNKNOWN ou ANY
let totalEntrega: any = totalPedido;

console.log(totalEntrega);