const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   {
    enunciado: "Qual desses não é um exemplo de IA?",
    alternativas: [
        {
            texto:"Assistente Virtual",
            afirmacao:"afirmacao"
        },
        {
            texto:"Rede Social",
            afirmacao:"afirmacao"
        },
       
    ]
   },
  
   {
    enunciado: "Qual é o papel da IA na automação de processos?",
    alternativas: [
        {
            texto:"Substituir completamente os humanos",
            afirmacao:"afirmacao"
        },
        {
            texto:"Auxiliar os humanos em tarefas repetitivas",
            afirmacao:"afirmacao"
        },
       
    ]
   },
   {
    enunciado: "O que significa a sigla IA?",
    alternativas: [
        {
            texto:"Instituto Ambiental",
            afirmacao:"afirmacao"
        },
        {
            texto:"Inteligência Artificial",
            afirmacao:"afirmacao"
        },
       
    ]
   },
   {
    enunciado: "A ética na IA trata de",
    alternativas: [
        {
            texto:"Garantir que a IA seja usada de forma responsável e ética.",
            afirmacao:"afirmacao"
        },
        {
            texto:"Desenvolver IA sem considerar suas implicações éticas.",
            afirmacao:"afirmacao"
        },
        
    ]
   },
   {
    enunciado: "IA fraca se refere a:",
    alternativas: [
        {
            texto: "IA projetada para uma tarefa específica.",
            afirmacao:"afirmacao"
        },
        {
            texto:"IA com habilidades sobrenaturais.",
            afirmacao:"afirmacao"
        },
        
    ]
   }, 
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionda(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    
}
}
function respostaSelecionda(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
