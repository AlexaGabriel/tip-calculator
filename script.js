const camposTexto = document.querySelectorAll('#texto');
const botoes = document.querySelectorAll('.inputs');
const pessoas = document.querySelectorAll('.texto2');
const result1 = document.querySelector('#thre');
const result2 = document.querySelector('#six');
const custom = document.querySelectorAll('.btn-tex');
const resetBtn = document.querySelector('.reset')

let valorDoCampoTexto = 0;
let valorDoBotao = 0;
let valorpessoas = 0;
let resultado = 0;
let resultado2 = 0;
let parc = 0;

function resetValues() {
    camposTexto.forEach(campo => {
        campo.value = '';
        valorDoCampoTexto = 0; 
    });
    valorDoBotao = 0;
    valorpessoas = 0;
    resultado = 0;
    resultado2 = 0;
    parc = 0;
    result1.innerHTML = `$${resultado.toFixed(2)}`;
    result2.innerHTML = `$${resultado2.toFixed(2)}`;
}
resetBtn.addEventListener('click', resetValues);


camposTexto.forEach(campo => {
    campo.addEventListener('input', () => {
        valorDoCampoTexto = parseFloat(campo.value);
    });
});

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        
        valorDoBotao = parseFloat(botao.value) / 100;
        parc = valorDoCampoTexto * valorDoBotao;
    });
});

custom.forEach(bota => {
    bota.addEventListener('input', () => {
        valorDoBotao = parseFloat(bota.value) / 100;
        parc = valorDoCampoTexto * valorDoBotao;
    });
});

pessoas.forEach(person => {
    person.addEventListener('input', () => {
        valorpessoas = parseFloat(person.value);
        resultado = parc / valorpessoas;
        resultado2 = (parc + valorDoCampoTexto) / valorpessoas;
        console.log(`Resultado: ${resultado}`);
        result1.innerHTML = `$${resultado.toFixed(2)}`;
        result2.innerHTML = `$${resultado2.toFixed(2)}`
    });
});