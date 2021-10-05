"use strict";
//Exemplo 1 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Milena Vieira', 'JavaScript Developer', 23];
console.log(pessoa);
//Exemplo 2 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Milena Vieira', 'JavaScript Developer', 23];
console.log(pessoa1[1]);
//Exemplo 3 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa2 = ['Milena Vieira', 'JavaScript Developer', 23];
console.log(pessoa2);
//Exemplo 4 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
//Exemplo 5 - Lista Heterogênea de Tupla
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
//Exemplo 6 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Milena', 'Rodrigo'], [23, 31]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Milena', 'Vieira'));
console.log(criarPessoa('Milena', 'Soares', 'Vieira'));
