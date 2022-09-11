"use strict";
const newUser = {
    email: "bruno@teste.com",
    status: true
};
console.log(newUser);
function novoUser(usuario) {
    console.log(usuario.email);
}
novoUser({ email: "ana@ana.com", status: false });
