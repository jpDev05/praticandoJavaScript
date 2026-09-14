// let nome = "Diogo";
// let idade = 30;

// //concatenação

// console.log("Nome: " + nome + ", idade: " + idade);

// // interpolação
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome); 
// console.log(typeof idade); 

// 

// let numero = "53"

// let convertido = Number(numero)

// console.log(typeof convertido);

// "10" == 10 -> true
// "10" === 10 -> false

// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`)
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`))

// let numeros = [ 1, 2, 3, 4]

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2
// })

// let numerosDobradosArrow = numeros.map(num => num * 2);

// let numeros = [1,2,3,4]

// let soma = numeros.reduce ((acumulador, auxiliar) => acumulador + auxiliar, 0);

// console.log(soma);

// let produtos = [
//     { id: 1, nome: "Teclado", preco: 50},
//     { id: 2, nome: "Mouse", preco: 30}
// ]

// let item = produtos.find(produto => produto.id === 2);

// console.log(item)


//==================================================================================================================================================
//===========================================   EXERCÍCIOS =========================================================================================

let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//=================================================================================================================================================

let numero = Number(prompt("Digite um número:"));

if (numero > 0) {
    console.log("O número é positivo.");
} else {
    console.log("O número é negativo.");
}

//=================================================================================================================================================

let nota = Number(prompt("Digite a nota do aluno (0 a 100):"));

if (nota >= 60) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}


//=================================================================================================================================================

let numero = Number(prompt("Digite um número:"));

if (numero > 0) {
    alert("O número é positivo.");
} else if (numero < 0) {
    alert("O número é negativo.");
} else {
    alert("O número é zero.");
}

//=================================================================================================================================================

let idade = Number(prompt("Digite sua idade:"));

if (idade >= 0 && idade <= 12) {
    alert("Você é uma Criança.");
} else if (idade >= 13 && idade <= 17) {
    alert("Você é um Adolescente.");
} else if (idade >= 18) {
    alert("Você é um Adulto.");
} else {
    alert("Idade inválida, insira um número positivo.");
}

//=================================================================================================================================================

let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

//=================================================================================================================================================


let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, * ou /):");

let resultado;

if (operacao === "+") {
    resultado = numero1 + numero2;
} else if (operacao === "-") {
    resultado = numero1 - numero2;
} else if (operacao === "*") {
    resultado = numero1 * numero2;
} else if (operacao === "/") {
    resultado = numero1 / numero2;
} else {
    resultado = "Operação inválida";
}

alert("Resultado: " + resultado);

//=================================================================================================================================================


let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let numero3 = Number(prompt("Digite o terceiro número:"));

if (numero1 >= numero2 && numero1 >= numero3) {
    alert("O maior número é: " + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    alert("O maior número é: " + numero2);
} else {
    alert("O maior número é: " + numero3);
}

//=================================================================================================================================================

let valor = Number(prompt("Digite o valor da compra:"));

if (valor > 100) {
    let desconto = valor * 0.10;
    let valorFinal = valor - desconto;

    alert("Você ganhou 10% de desconto!");
    alert("Valor final: R$ " + valorFinal);
} else {
    alert("Valor da compra: R$ " + valor);
}

//=================================================================================================================================================

let usuario = prompt("Digite seu usuário:");
let senha = prompt("Digite sua senha:");

if (usuario === "admin" && senha === "1234") {
    alert("Login bem-sucedido");
} else {
    alert("Acesso negado");
}

//=================================================================================================================================================

let valorCompra = Number(prompt("Digite o valor da compra:"));

if (valorCompra >= 100) {
    alert("Frete grátis!");
} else if (valorCompra >= 50) {
    alert("O valor do frete é R$ 10,00");
} else {
    alert("O valor do frete é R$ 20,00");
}

//=================================================================================================================================================

let idade = Number(prompt("Digite sua idade:"));
let temConvite = prompt("Você tem convite? (sim/não)");

if (idade >= 18 || temConvite === "sim") {
    alert("Pode entrar!");
} else {
    alert("Barrado!");
}

//=================================================================================================================================================

let nota = Number(prompt("Digite sua nota (0-100):"));

if (nota >= 90) {
    alert("Conceito A");
} else if (nota >= 80) {
    alert("Conceito B");
} else if (nota >= 70) {
    alert("Conceito C");
} else if (nota >= 60) {
    alert("Conceito D");
} else {
    alert("Conceito F");
}

//=================================================================================================================================================

let peso = Number(prompt("Digite seu peso em kg:"));
let altura = Number(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert("Abaixo do peso. IMC: " + imc.toFixed(2));
} else if (imc < 25) {
    alert("Peso normal. IMC: " + imc.toFixed(2));
} else if (imc < 30) {
    alert("Sobrepeso. IMC: " + imc.toFixed(2));
} else {
    alert("Obesidade. IMC: " + imc.toFixed(2));
}

//=================================================================================================================================================

let estoque = Number(prompt("Digite a quantidade em estoque:"));

if (estoque === 10) {
    alert("Produto disponível");
} else if (estoque >= 1 && estoque < 10) {
    alert("Últimas unidades");
} else if (estoque === 0) {
    alert("Esgotado");
} else {
    alert("Quantidade de estoque inválida");
}

//=================================================================================================================================================
