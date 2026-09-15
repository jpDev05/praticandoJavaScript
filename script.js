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
//===========================================   EXERCÍCIOS  CONDICIONAIS   =========================================================================================

// let idade = Number(prompt("Digite sua idade:"));

// if (idade >= 18) {
//     console.log("Você é maior de idade.");
// } else {
//     console.log("Você é menor de idade.");
// }

// //=================================================================================================================================================

// let numero = Number(prompt("Digite um número:"));

// if (numero > 0) {
//     console.log("O número é positivo.");
// } else {
//     console.log("O número é negativo.");
// }

// //=================================================================================================================================================

// let nota = Number(prompt("Digite a nota do aluno (0 a 100):"));

// if (nota >= 60) {
//     alert("Aprovado");
// } else {
//     alert("Reprovado");
// }


// //=================================================================================================================================================

// let numero = Number(prompt("Digite um número:"));

// if (numero > 0) {
//     alert("O número é positivo.");
// } else if (numero < 0) {
//     alert("O número é negativo.");
// } else {
//     alert("O número é zero.");
// }

// //=================================================================================================================================================

// let idade = Number(prompt("Digite sua idade:"));

// if (idade >= 0 && idade <= 12) {
//     alert("Você é uma Criança.");
// } else if (idade >= 13 && idade <= 17) {
//     alert("Você é um Adolescente.");
// } else if (idade >= 18) {
//     alert("Você é um Adulto.");
// } else {
//     alert("Idade inválida, insira um número positivo.");
// }

// //=================================================================================================================================================

// let numero = Number(prompt("Digite um número:"));

// if (numero % 2 === 0) {
//     console.log("O número é par.");
// } else {
//     console.log("O número é ímpar.");
// }

// //=================================================================================================================================================


// let numero1 = Number(prompt("Digite o primeiro número:"));
// let numero2 = Number(prompt("Digite o segundo número:"));
// let operacao = prompt("Digite a operação (+, -, * ou /):");

// let resultado;

// if (operacao === "+") {
//     resultado = numero1 + numero2;
// } else if (operacao === "-") {
//     resultado = numero1 - numero2;
// } else if (operacao === "*") {
//     resultado = numero1 * numero2;
// } else if (operacao === "/") {
//     resultado = numero1 / numero2;
// } else {
//     resultado = "Operação inválida";
// }

// alert("Resultado: " + resultado);

// //=================================================================================================================================================


// let numero1 = Number(prompt("Digite o primeiro número:"));
// let numero2 = Number(prompt("Digite o segundo número:"));
// let numero3 = Number(prompt("Digite o terceiro número:"));

// if (numero1 >= numero2 && numero1 >= numero3) {
//     alert("O maior número é: " + numero1);
// } else if (numero2 >= numero1 && numero2 >= numero3) {
//     alert("O maior número é: " + numero2);
// } else {
//     alert("O maior número é: " + numero3);
// }

// //=================================================================================================================================================

// let valor = Number(prompt("Digite o valor da compra:"));

// if (valor > 100) {
//     let desconto = valor * 0.10;
//     let valorFinal = valor - desconto;

//     alert("Você ganhou 10% de desconto!");
//     alert("Valor final: R$ " + valorFinal);
// } else {
//     alert("Valor da compra: R$ " + valor);
// }

// //=================================================================================================================================================

// let usuario = prompt("Digite seu usuário:");
// let senha = prompt("Digite sua senha:");

// if (usuario === "admin" && senha === "1234") {
//     alert("Login bem-sucedido");
// } else {
//     alert("Acesso negado");
// }

// //=================================================================================================================================================

// let valorCompra = Number(prompt("Digite o valor da compra:"));

// if (valorCompra >= 100) {
//     alert("Frete grátis!");
// } else if (valorCompra >= 50) {
//     alert("O valor do frete é R$ 10,00");
// } else {
//     alert("O valor do frete é R$ 20,00");
// }

// //=================================================================================================================================================

// let idade = Number(prompt("Digite sua idade:"));
// let temConvite = prompt("Você tem convite? (sim/não)");

// if (idade >= 18 || temConvite === "sim") {
//     alert("Pode entrar!");
// } else {
//     alert("Barrado!");
// }

// //=================================================================================================================================================

// let nota = Number(prompt("Digite sua nota (0-100):"));

// if (nota >= 90) {
//     alert("Conceito A");
// } else if (nota >= 80) {
//     alert("Conceito B");
// } else if (nota >= 70) {
//     alert("Conceito C");
// } else if (nota >= 60) {
//     alert("Conceito D");
// } else {
//     alert("Conceito F");
// }

// //=================================================================================================================================================

// let peso = Number(prompt("Digite seu peso em kg:"));
// let altura = Number(prompt("Digite sua altura em metros:"));

// let imc = peso / (altura * altura);

// if (imc < 18.5) {
//     alert("Abaixo do peso. IMC: " + imc.toFixed(2));
// } else if (imc < 25) {
//     alert("Peso normal. IMC: " + imc.toFixed(2));
// } else if (imc < 30) {
//     alert("Sobrepeso. IMC: " + imc.toFixed(2));
// } else {
//     alert("Obesidade. IMC: " + imc.toFixed(2));
// }

// //=================================================================================================================================================

// let estoque = Number(prompt("Digite a quantidade em estoque:"));

// if (estoque === 10) {
//     alert("Produto disponível");
// } else if (estoque >= 1 && estoque < 10) {
//     alert("Últimas unidades");
// } else if (estoque === 0) {
//     alert("Esgotado");
// } else {
//     alert("Quantidade de estoque inválida");
// }

// // //=================================================================================================================================================
// // //===========================================   EXERCÍCIOS REPETIÇÃO   ============================================================================

// // for ( let i = 1; i++; i <= 10 ) {
// //      console.log(i);
// // }

// //==================================================================================================================================================

// // let numero = Number(prompt("Digite um número:"));

// // for (let i = 1; i <= 10; i++) {
// //     console.log(`${numero} x ${i} = ${numero * i}`);
// // }

// //=================================================================================================================================================

// let N = Number(prompt("Digite um número N:"));

// let soma = 0;
// let contador = 1;

// while (contador <= N) {
//     soma += contador;
//     contador++;
// }

// //=================================================================================================================================================

// // 1. Exibir os números pares de 1 a 50

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// //=================================================================================================================================================

// // 2. Jogo de adivinhação

// let numero = Math.floor(Math.random() * 100) + 1;
// let palpite = Number(prompt("Adivinhe o número de 1 a 100:"));

// while (palpite !== numero) {
//     if (palpite > numero) {
//         alert("O número correto é menor!");
//     } else {
//         alert("O número correto é maior!");
//     }

//     palpite = Number(prompt("Tente novamente:"));
// }

// alert("Parabéns! Você acertou!");

// //=================================================================================================================================================


// // 3. Contagem regressiva

// let contador = Number(prompt("Digite um número:"));

// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// }


// //=================================================================================================================================================

// // 4. Validação de senha

// const senhaCorreta = "1234";
// let senha = prompt("Digite a senha:");

// while (senha !== senhaCorreta) {
//     alert("Senha incorreta!");
//     senha = prompt("Digite novamente:");
// }

// alert("Senha correta!");

// //=================================================================================================================================================


// // 5. Soma até parar

// let total = 0;
// let valor = Number(prompt("Digite um número (0 para parar):"));

// while (valor !== 0) {
//     total += valor;
//     valor = Number(prompt("Digite outro número (0 para parar):"));
// }

// console.log("Total:", total);


// //=================================================================================================================================================

// // 6. Média de 3 valores usando repetição

// let soma = 0;

// for (let i = 1; i <= 3; i++) {
//     let valor = Number(prompt(`Digite o ${i}º número:`));
//     soma += valor;
// }

// let media = soma / 3;

// console.log("Média:", media);


// //=================================================================================================================================================
