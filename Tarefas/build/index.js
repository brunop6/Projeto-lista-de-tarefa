"use strict";
let inputElement = document.querySelector("input");
let selectElement = document.querySelector("#stage");
let buttonElement = document.querySelector("#add");
let todoElement = document.querySelector(".toDo ul");
let inProgressElement = document.querySelector(".inProgress ul");
let doneElement = document.querySelector(".done ul");
let listaSalva = localStorage.getItem("@listagemTarefas");
let tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
function listarTarefas() {
    todoElement.innerHTML = "";
    inProgressElement.innerHTML = "";
    doneElement.innerHTML = "";
    tarefas.map((item, index) => {
        if (index % 2 == 0) {
            let liElement = document.createElement("li");
            let liText = document.createTextNode(item);
            let aDiv = document.createElement("div");
            let editElement = document.createElement("a");
            let editText = document.createTextNode("Editar");
            let deleteElement = document.createElement("a");
            let deleteText = document.createTextNode("Excluir");
            let moveElement = document.createElement("a");
            let spanElement = document.createElement("span");
            editElement.setAttribute("href", "#");
            editElement.setAttribute("onclick", `editarTarefa(${index})`);
            editElement.setAttribute("style", "color: Orange;");
            editElement.appendChild(editText);
            deleteElement.setAttribute("href", "#");
            deleteElement.setAttribute("onclick", `deletarTarefa(${index})`);
            deleteElement.setAttribute("style", "color: Red;");
            deleteElement.appendChild(deleteText);
            spanElement.innerHTML = "&#10149;";
            moveElement.setAttribute("href", "#");
            moveElement.setAttribute("onclick", `moverTarefa(${index})`);
            moveElement.setAttribute("style", "color: Black;");
            moveElement.setAttribute("class", "arrow");
            moveElement.appendChild(spanElement);
            aDiv.appendChild(editElement);
            aDiv.appendChild(deleteElement);
            aDiv.appendChild(moveElement);
            liElement.appendChild(liText);
            liElement.appendChild(aDiv);
            switch (tarefas[index + 1]) {
                case "0":
                    todoElement.appendChild(liElement);
                    break;
                case "1":
                    inProgressElement.appendChild(liElement);
                    break;
                case "2":
                    doneElement.appendChild(liElement);
                    break;
            }
        }
    });
}
function adicionarTarefa() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        let tarefaDigitada = inputElement.value;
        let estagioTarefa = selectElement.value;
        tarefas.push(tarefaDigitada, estagioTarefa);
        inputElement.value = "";
        selectElement.selectedIndex = 0;
        listarTarefas();
        salvarDados();
    }
}
function editarTarefa(posicao) {
    let newText = prompt("Renomeie a tarefa:");
    if ((typeof (newText) !== "string") || (newText.length < 3)) {
        return false;
    }
    tarefas[posicao] = newText;
    listarTarefas();
    salvarDados();
}
function deletarTarefa(posicao) {
    tarefas.splice(posicao, 2);
    listarTarefas();
    salvarDados();
}
function moverTarefa(posicao) {
    let stage = Number(tarefas[posicao + 1]);
    if (stage < 2) {
        tarefas[posicao + 1] = String(stage + 1);
    }
    else {
        tarefas[posicao + 1] = "0";
    }
    listarTarefas();
    salvarDados();
}
function salvarDados() {
    localStorage.setItem("@listagemTarefas", JSON.stringify(tarefas));
}
listarTarefas();
buttonElement.onclick = adicionarTarefa;
