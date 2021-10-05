// Variáveis
let nome: string = 'Milena Vieira';
console.log(nome);

//Arrays
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Girafa'];
console.log(animais);

//Objetos
let carro: {
    nome: string;
    ano: number;
    preco: number;
};
carro = { nome: 'Kwid Intense', ano: 2020, preco: 40000 };
console.log(carro);

//Funções
function multiplicarNumero(num1: number, num2: number){
    return num1 * num2;
}
console.log(multiplicarNumero(4, 4));