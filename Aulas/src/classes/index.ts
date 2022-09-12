import { connection, statusConnection } from './database/connection'
import status, { resetarBanco } from './database/aplicativo'

function acessarSistema(){
    connection({ip: "192.168.54.10", name: "MySQL"})
}

//acessarSistema();
//statusConnection();

status();
resetarBanco();