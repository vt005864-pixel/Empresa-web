function sendMessage() {

let input = document.getElementById("userInput");
let chat = document.getElementById("chat");

if(input.value.trim() === "") return;

addMessage("user", input.value);

setTimeout(() => {
addMessage("bot", "SATI AI ainda está em modo base. IA real será ativada na próxima fase.");
}, 500);

input.value = "";
}

function addMessage(type, text) {

let chat = document.getElementById("chat");
let div = document.createElement("div");
div.classList.add("message", type);
div.innerText = text;

chat.appendChild(div);
chat.scrollTop = chat.scrollHeight;
}

function gerarCodigo(){
addMessage("bot", "Modo gerar código será ativado na Fase 2.");
}

function gerarProjeto(){
addMessage("bot", "Gerador de Projeto Android será ativado na Fase 3.");
}
