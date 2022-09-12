"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listaSalva = localStorage.getItem("@listagemTarefas");
let tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
function listarTarefas() {
    listElement.innerHTML = "";
    tarefas.map((item, index) => {
        let todoElement = document.createElement("li");
        let tarefaText = document.createTextNode(item);
        let editElement = document.createElement("a");
        let editText = document.createTextNode("Editar");
        let deleteElement = document.createElement("a");
        let deleteText = document.createTextNode("Excluir");
        editElement.setAttribute("href", "#");
        editElement.setAttribute("onclick", `editarTarefa(${index})`);
        editElement.setAttribute("style", "color: Orange;");
        deleteElement.setAttribute("href", "#");
        deleteElement.setAttribute("onclick", `deletarTarefa(${index})`);
        deleteElement.setAttribute("style", "color: Red;");
        editElement.appendChild(editText);
        deleteElement.appendChild(deleteText);
        todoElement.appendChild(tarefaText);
        todoElement.appendChild(editElement);
        todoElement.appendChild(deleteElement);
        listElement.appendChild(todoElement);
    });
}
function adicionarTarefa() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        let tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = "";
        listarTarefas();
        salvarDados();
    }
}
function editarTarefa(posicao) {
    let newText = prompt("Renomeie a tarefa:");
    if (newText.length < 3) {
        return false;
    }
    tarefas[posicao] = newText;
    listarTarefas();
    salvarDados();
}
function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    listarTarefas();
    salvarDados();
}
function salvarDados() {
    localStorage.setItem("@listagemTarefas", JSON.stringify(tarefas));
}
listarTarefas();
buttonElement.onclick = adicionarTarefa;
