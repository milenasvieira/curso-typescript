//Exemplo 1 - Uso simples de Tuplas em TypeScript

let pessoa: [string, string, number];
pessoa = ['Milena Vieira', 'JavaScript Developer', 23];

console.log(pessoa);

//Exemplo 2 - Acessando o valor da Tupla

let pessoa1: [string, string, number];
pessoa1 = ['Milena Vieira', 'JavaScript Developer', 23];

console.log(pessoa1[1]);

//Exemplo 3 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] = ['Milena Vieira', 'JavaScript Developer', 23];

console.log(pessoa2);

//Exemplo 4 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);

//Exemplo 5 - Lista Heterogênea de Tupla

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

//Exemplo 6 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Milena', 'Rodrigo'], [23, 31]);
console.log(resultado)

//Exemplo 7 - Labeled Tuples com Spread Operator numa função

type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log(criarPessoa('Milena', 'Vieira'));
console.log(criarPessoa('Milena', 'Soares', 'Vieira'));