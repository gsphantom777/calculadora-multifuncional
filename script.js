function somar() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);

  let resultado = numero1 + numero2;

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function subtrair() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);

  let resultado = numero1 - numero2;

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function multiplicar() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);

  let resultado = numero1 * numero2;

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function dividir() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);

  let resultado = numero1 / numero2;

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
function calcularTudo() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);

  let soma = numero1 + numero2;
  let subtracao = numero1 - numero2;
  let multiplicacao = numero1 * numero2;
  
  let divisao = "";
  if (numero2 === 0) {
      divisao = "Não é possível dividir por zero";
  } else {
      divisao = numero1 / numero2;
  }

  document.getElementById("resultado-tudo").innerHTML = `
      Soma: ${numero1} + ${numero2} = ${soma} <br>
      Subtração: ${numero1} - ${numero2} = ${subtracao} <br>
      Multiplicação: ${numero1} * ${numero2} = ${multiplicacao} <br>
      Divisão: ${numero1} / ${numero2} = ${divisao}
  `;
}
