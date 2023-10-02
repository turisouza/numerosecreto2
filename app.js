//

alert("Boas Vindas ao Jogo do Número Secreto!");
let valorMultiplicado = 1000;
let numeroSecreto = parseInt(Math.random() * valorMultiplicado + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 e ${valorMultiplicado}`);

    if (chute == numeroSecreto) {
        break;
        } else {
        tentativas ++;    
        if (chute < numeroSecreto) {
        alert(`O número secreto é maior que ${chute}`);
    }else {
        alert(`O número secreto é menor que ${chute}`);

    }
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns, você acertou o número Secreto que é igual a ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


//

