"use strict";
//Exemplo 1: Tipo Unknown
let valorVariavel;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';
// console.log(valorVariavel);
//Exemplo 2: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!
/*let valor: unknown;
let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor;*/
//Exemplo 3: diferença entre: 'any' vs 'unknown'
let algumaCoisaAny;
let algumaCoisaUnknown;
console.log(algumaCoisaAny.toFixed());
if (typeof algumaCoisaUnknown === 'number') {
    console.log(algumaCoisaUnknown.toFixed());
}
