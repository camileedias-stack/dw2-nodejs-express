// EXERCICIO 1 

function showMessage(){
  const message = "<h2> Meu nome é Camile <br>Tenho 19 anos</br><br>Moro em Iguape /SP</br></h2>";
  document.write(message);
}

showMessage();

// EXERCICIO 2 
const n1 = 80;
const n2 = 5;

function sun(n1, n2) {

  let result = n1 + n2;
  document.write(`<p>A divisão de ${n1} / ${n2} é igual a ${result}.</p>`);
}

sun(n1, n2);

// EXERCICIO 3

const num1 = 50;
const num2 = 3;
const num3 = 8;

function mult(num1, num2,num3) {
  return num1 * num2 * num3;
}

document.write(`O resultado da multiplicação é  ${mult(num1, num2, num3)}.`);

// EXERCICIO 4
const number = 5;

function maiormenor(number) {
  if (number % 18 == 0) {
    return "Menor de Idade";
  } else {
    return  "Maior de Idade";
  }
}
document.write(`<p> O numero ${number} é ${maiormenor(number)}.</p>`);

// EXERCICIO 5 

 