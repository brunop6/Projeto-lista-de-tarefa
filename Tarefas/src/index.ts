let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let listaSalva: (string | null) = localStorage.getItem("@listagemTarefas");
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || [];

function listarTarefas() {
	listElement.innerHTML = "";

	tarefas.map( (item, index) => {
		let todoElement = document.createElement("li");
		let tarefaText = document.createTextNode(item);

		let linkElement = document.createElement("a");
		let linkText = document.createTextNode("Excluir");
		
		linkElement.setAttribute("href", "#");
		linkElement.setAttribute("onclick", `deletarTarefa(${index})`);
		linkElement.setAttribute("style", "margin-left: 10px");

		linkElement.appendChild(linkText);
		
		todoElement.appendChild(tarefaText);
		todoElement.appendChild(linkElement);
		
		listElement.appendChild(todoElement);
	});
}

function adicionarTarefa() {
	if (inputElement.value === "") {
		alert("Digite alguma tarefa!")
		return false;
	} else {

		let tarefaDigitada: string = inputElement.value;
		tarefas.push(tarefaDigitada);

		inputElement.value = "";

		listarTarefas();
		salvarDados();
	}
}

function salvarDados() {
	localStorage.setItem("@listagemTarefas", JSON.stringify(tarefas))
}

function deletarTarefa(posicao: number) {
	tarefas.splice(posicao, 1);

	listarTarefas();
	salvarDados();
}

listarTarefas();

buttonElement.onclick = adicionarTarefa;