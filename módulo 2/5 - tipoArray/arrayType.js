"use strict";
//Exemplo 1 - Uso de colchetes
let frutas = ['abacaxi', 'laranja', 'maca', 'uva'];
console.log(frutas[0]);
//Exemplo 2 - Array Object (mais comum)
let frutas2 = ['abacaxi', 'laranja', 'maca', 'uva'];
console.log(frutas[1]);
//Exemplo 3 - Adicionando mais strings com o método push
let idiomas = ['portugues', 'ingles', 'espanhol'];
console.log(idiomas);
idiomas.push('alemao');
console.log(idiomas);
//Exemplo 4 - Identificar tamanho do array com o método length
let idiomas2 = ['portugues', 'ingles', 'espanhol'];
console.log(idiomas2.length);
//Exemplo 5 - Array com Spread Operator
let listaNumeros = [1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
//Exemplo 6 - Array com laço de iteração
let linguagensArray = new Array('JavaScript', 'Python', 'Java');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
