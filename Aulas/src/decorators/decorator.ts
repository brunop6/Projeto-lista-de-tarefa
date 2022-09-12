//function logInfo(target: any){
//    console.log("Sistema está online!");    
//}

//function logInfo(mensagem: string){
//    return (target: any) => {
//        console.log(`${mensagem}, ${target}`);
//    }  
//}
//
//@logInfo("Servidor está rodando!")
//class Sistema{
//
//}

function setIpServidor(novoIp: string){
    return (target: any) => { //Target é o construtor da nossa classe
        return class extends target{
            ip = novoIp;
        }
    }
}

@setIpServidor("192.168.50.30")
class Servidor{

}

const servidor1 = new Servidor();

console.log(servidor1);