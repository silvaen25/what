// script.js
const perguntas = [
  "1. What (o quê): Descreva a tarefa ou ação específica.",
  "2. Why (por quê): Explique a razão da tarefa.",
  "3. Who (quem): Quem é responsável pela execução?",
  "4. Where (onde): Onde será implementada a ação?",
  "5. When (quando): Qual o prazo da tarefa?",
  "6. How (como): Qual o método/procedimento?",
  "7. How much (quanto custa): Qual o orçamento necessário?"
];

let respostas = [];
let indice = 0;

function iniciarJogo() {
  mostrarTela("tela-pergunta");
  mostrarPergunta();
}

function mostrarPergunta() {
  document.getElementById("pergunta").innerText = perguntas[indice];
  document.getElementById("resposta").value = "";
}

function proximaPergunta() {
  const resposta = document.getElementById("resposta").value.trim();
  if (resposta === "") return alert("Digite sua resposta!");
  respostas.push(resposta);

  indice++;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarFolheto();
  }
}

function mostrarFolheto() {
  mostrarTela("tela-folheto");
  let folhetoHTML = "";
  for (let i = 0; i < perguntas.length; i++) {
    folhetoHTML += `<p><b>${perguntas[i]}</b><br> ${respostas[i]}</p>`;
  }
  document.getElementById("folheto-respostas").innerHTML = folhetoHTML;
}

function finalizar() {
  const escolha = document.querySelector("input[name='concluido']:checked");
  if (!escolha) return alert("Selecione se conseguiu concluir!");
  
  if (escolha.value === "sim") {
    mostrarTela("tela-vitoria");
  } else {
    mostrarTela("tela-fracasso");
  }
}

function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach(t => t.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("active");
}
