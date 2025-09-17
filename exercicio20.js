let nota = parseFloat(prompt("Digite sua nota"));

if (nota >= 7.0){
    alert(`Sua nota foi ${nota} e você foi aprovado!`);
} else if(nota < 7 && nota >= 5.0){
    alert(`Sua nota foi ${nota} e você está de recuperação!`);
} else {
    alert(`Sua nota foi ${nota} e você foi reprovado!`);
};