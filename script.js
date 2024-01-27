let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemConsole() {
    console.log('O Botão foi clicado!')
}

function exibirAlerta() {
    alert('Eu amo Js')
    
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma Cidade do Brasil')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)

}

function somaDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
    
}
