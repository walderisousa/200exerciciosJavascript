alert("Pense em um número de 1 a 10");

let inicio = 1;
let fim = 10;

while (inicio <= fim) {
    let meio = ((inicio + fim) / 2) | 0; 
    let resposta = prompt(`Seu numero é ${meio}? Digite: 1 se acertei, 2 se é menor e 3 se é maior`);

    if (resposta == 1) {
        alert(`Você pensou no numero ${meio}`);
        break;
    } else if (resposta == 2) {
        fim = meio - 1;
    } else if (resposta == 3) {
        inicio = meio + 1;
    } else {
        alert("Opção invalida, responda apenas com numeros 1, 2 e 3");
    }
}

if (inicio > fim) {
    alert("Você mudou o numero durante o processo?");
}