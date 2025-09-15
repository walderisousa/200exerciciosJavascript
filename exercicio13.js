let peso = parseFloat(prompt("Digite seu peso em kg"));
let altura = parseFloat(prompt("Digite sua altura em metros"));

let imc = peso / (altura * altura);

if(imc < 18.5){
    alert(`Você está abaixo do peso, IMC = ${imc}`);
}else if(imc < 24.9){
    alert(`Você está no peso normal, IMC = ${imc}`);
}else if(imc < 29.9){
    alert(`Você está com sobrepeso, IMC = ${imc}`);
} else if(imc > 29.9){
    alert(`Você está com obesidade, IMC = ${imc}`);
} else{
    alert(`Digite numeros válidos!`);
}
