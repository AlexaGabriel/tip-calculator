const camposTexto = document.querySelectorAll('#texto');
const botoes = document.querySelectorAll('.inputs');
const error1 = document.querySelector('.button')
const error2 = document.querySelector('.button2')
const pessoas = document.querySelectorAll('.texto2');
const result1 = document.querySelector('#thre');
const result2 = document.querySelector('#six');
const custom = document.querySelectorAll('.btn-tex');
const resetBtn = document.querySelector('.reset')
const err = document.querySelector('.ermen')
const err1 = document.querySelector('.ermen1')

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

        if (isNaN(valorDoCampoTexto) || valorDoCampoTexto <= 0) {
            error1.classList.add('erro');
            err.innerHTML = ('can t be a zero') 
          } else {
            error1.classList.remove('erro');
            err.innerHTML = ('') 
          }
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
        if (isNaN(valorpessoas) || valorpessoas <= 0) {
            error2.classList.add('error');
            err1.innerHTML = ('can t be a zero') 
          } else {
            error2.classList.remove('error');
            err1.innerHTML = ('') 
          }
        resultado = parc / valorpessoas;
        resultado2 = (parc + valorDoCampoTexto) / valorpessoas;
        console.log(`Resultado: ${resultado}`);
        result1.innerHTML = `$${resultado.toFixed(2)}`;
        result2.innerHTML = `$${resultado2.toFixed(2)}`
    });
});