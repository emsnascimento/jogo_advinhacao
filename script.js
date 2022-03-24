function sorteiaNumeroInteiro(n) {
  return parseInt(Math.random() * n);
}

function limparFocarInput(idInput) {
  document.getElementById(idInput).value = '';
  document.getElementById(idInput).focus();
}

var numeroSecreto = sorteiaNumeroInteiro(11);
console.log(numeroSecreto);
var tentativas = 3;
limparFocarInput('inputBox');

function chutar() {
  var elementoResultado = document.getElementById('resultado');
  var elementoTentativa = document.getElementById('tentativa');
  var btnTenteNovamente = document.getElementById('botaoTenteNovamente');
  var chute = parseInt(document.getElementById('inputBox').value);

  if (chute == numeroSecreto) {
    tentativas = 3
    elementoResultado.innerHTML = `Você acertou! Eu realmente estava pensando no número ${numeroSecreto}`;
    document.getElementById('chutar').style.visibility = 'hidden';
    btnTenteNovamente.removeAttribute('hidden');
    tentativas = tentativas - 1;
    elementoTentativa.innerHTML = `Tentativas: ${tentativas}`;
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = 'Digite um número entre 0 e 10!';
    limparFocarInput('inputBox');
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = 'Errou, estou pensando em um número menor';
    tentativas = tentativas - 1;
    elementoTentativa.innerHTML = `Tentativas: ${tentativas}`;
    limparFocarInput('inputBox');
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = 'Errou, estou pensando em um número maior';
    tentativas = tentativas - 1;
    elementoTentativa.innerHTML = `Tentativas: ${tentativas}`;
    limparFocarInput('inputBox');
  }
  if (tentativas == 0) {
    document.getElementById('chutar').style.visibility = 'hidden';
    elementoResultado.innerHTML = `Você perdeu, o numero secreto era ${numeroSecreto}`;
    btnTenteNovamente.removeAttribute('hidden');
  }
}
