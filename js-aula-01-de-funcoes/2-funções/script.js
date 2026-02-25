//TIPOS DE FUNÇÕES
//FUNÇÃO SIMPLES
function showMessage() {
  const message = "<h2> Olá, bem-vindo</h2>";
  document.write(message);
}

//INVOCAR A FUNÇÃO
showMessage();

//FUNÇÃO COM PARAMENTRO / ARGUMENTO
const user = "Camile Dias";

function showuserMessage(user) {
  // ESSA FUNÇÃO RECEBE UM PARÂMENTRO
  document.write(`<h2>O que deseja fazer hoje, ${user}?</h2>`);
}

showuserMessage(user); //ENVIO DE ARGUMENTO

//FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 10;
const n2 = 5;

function sun(n1, n2) {
  //ESSA FUNÇÃO RECEBE DOIS PARÂMETRO
  let result = n1 + n2;
  document.write(`<p>A soma de ${n1} + ${n2} é igual a ${result}.</p>`);
}
//INVOCANDO A FUNÇÃO
sun(n1, n2); // ENVIANDO OS ARGUMENTOS

//FUNÇÃO COM RETORNO
const num1 = 50;
const num2 = 3;

// É INDICADO QUE AS FUNÇÕES POSSUAMO MINIMO DE RESPONSABILIDADES POSSIVEIS
//ESSA FUNÇÃO IRÁ MULTIPLICAR DOIS NÚMEROS
function mult(num1, num2) {
  return num1 * num2;
}

document.write(`O resultado da multiplicação é  ${mult(num1, num2)}.`);

//FUNÇÃO COM RETORNO CONDICIONAL
const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar;";
  }
}
document.write(`<p> O numero ${number} é ${parImpar(number)}.</p>`);

//FUNÇÃO ANÔNIMA
const divisao = function (n) {
  return n / 2;
};
let numero = 200;

document.write(`<p> A metade de ${numero} é ${divisao(numero)}.</p>`);

//FUNÇÃO SETA (ARROW FUNCTION)
const dobro = function (x) {
  return x * 2;
};
const x = 300;
document.write(`<p>O dobro de ${x} é ${dobro(x)}.</p>`);

//ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calculadora = (a, operador, b) => {
  return eval(`${a} ${operador} ${b}`);
};

document.write(`<p>O resultado da operação matemática é ${calculadora(1100,"/",2)}.`)