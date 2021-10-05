"use strict";
//Exemplo 1: Tipo Any
const a = 23;
const b = ['Milena'];
const result = a + b;
console.log(result);
//Exemplo 2: Quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';
console.log(frase);*/
//Exemplo 3: Quando devemos usar o tipo any?!
const formulario = {
    nome: 'Milena',
    sobrenome: 'Vieira',
    idade: 23,
};
console.log(formulario);
