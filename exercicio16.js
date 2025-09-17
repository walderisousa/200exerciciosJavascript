let num1 = parseInt(prompt("Digite o numero 1"));
let num2 = parseInt(prompt("Digite o numero 2"));
let num3 = parseInt(prompt("Digite o numero 3"));

if(num1 == num2 && num1 > num3){
    console.log("Os numeros 1 e 2 são iguais e maiores = " + num1);
 }else if(num1 == num3 && num1 > num2){
    console.log("Os numeros 1 e 3 são iguais e maiores = " + num1);
 }else if(num2 == num3 && num2 > num1){
    console.log("Os numeros 2 e 3 são iguais e maiores = " + num2);
} else if (num1 > num2 && num1 > num3){
    console.log("O maior é o numero 1 = " + num1);
} else if (num2 > num3){
    console.log("O maior é o numero 2 = " + num2);
} else {
    console.log("O maior é o numero 3 = " + num3);
};