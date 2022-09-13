//Inputs
let inputElement = document.querySelector("input") as HTMLInputElement;
let selectElement = document.querySelector("#stage") as HTMLSelectElement;
let buttonElement = document.querySelector("#add") as HTMLElement;

//Listas To Do, In Progress e Done
let todoElement = document.querySelector(".toDo ul") as HTMLUListElement;
let inProgressElement = document.querySelector(".inProgress ul") as HTMLUListElement;
let doneElement = document.querySelector(".done ul") as HTMLUListElement;

//Levantamento dos dados salvos
let listaSalva: (string | null) = localStorage.getItem("@listagemTarefas");
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || [];

function listarTarefas() {
	todoElement.innerHTML = "";
	inProgressElement.innerHTML = "";
	doneElement.innerHTML = "";

	tarefas.map( (item, index) => {
		/**
		 * Indices pares.. = Texto da tarefa
		 * Indices impares = Estágio da tarefa: { "0" | "1" | "2" }
		 */
		if(index % 2 == 0){
			//Elemento <li>
			let liElement = document.createElement("li");
			let liText = document.createTextNode(item);

			//<div> p/ os links
			let aDiv = document.createElement("div");

			//Links de edição e exclusão
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
			
			switch(tarefas[index+1]){
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
		alert("Digite alguma tarefa!")
		return false;
	} else {
		let tarefaDigitada: string = inputElement.value;
		let estagioTarefa: string = selectElement.value;

		tarefas.push(tarefaDigitada, estagioTarefa);

		inputElement.value = "";
		selectElement.selectedIndex = 0;

		listarTarefas();
		salvarDados();
	}
}

function editarTarefa(posicao: number) {
	let newText = prompt("Renomeie a tarefa:");

	if((typeof(newText) !== "string") || (newText!.length < 3)){
		return false;
	}

	tarefas[posicao] = <string>newText;

	listarTarefas();
	salvarDados();
}

function deletarTarefa(posicao: number) {
	tarefas.splice(posicao, 2);

	listarTarefas();
	salvarDados();
}

function moverTarefa(posicao: number) {
	let stage = Number(tarefas[posicao+1]);

	if(stage < 2){
		tarefas[posicao+1] = String(stage+1);
	}else{
		tarefas[posicao+1] = "0";
	}

	listarTarefas();
	salvarDados();
}

function salvarDados() {
	localStorage.setItem("@listagemTarefas", JSON.stringify(tarefas))
}

listarTarefas();

buttonElement.onclick = adicionarTarefa;