"use strict";
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    get getServidorIP() {
        console.log("== METODO GET ==");
        return this.servidor;
    }
    set setServidorIP(novoIP) {
        if (this.servidor === novoIP) {
            throw new Error("O novo IP deve ser diferente do IP antigo");
        }
        this.servidor = novoIP;
    }
}
const gta5 = new Jogo("192.168.9.11");
try {
    gta5.setServidorIP = "192.168.155.15";
}
catch (error) {
    console.log(error);
}
console.log(gta5.getServidorIP);
