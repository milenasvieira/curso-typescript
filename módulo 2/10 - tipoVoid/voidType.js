"use strict";
//Exemplo 1 - funções
function logError(errorMessage) {
    console.log(errorMessage);
}
logError('Required field - Name!');
//Exemplo 2 - funções
const logErrorExample2 = (errorMessage) => {
    console.log(errorMessage);
};
logErrorExample2('Required field - Surname');
//Exemplo void: variáveis
let variavelExemploVoid;
variavelExemploVoid = null; //strictNullChecks = false no tsconfig.json para não apontar o erro
variavelExemploVoid = undefined;
console.log(variavelExemploVoid);
