let numero1 = 0;
let numero2 = 1;

let proxNumero;

console.log(numero1); 
console.log(numero2);

for (let i = 2; i < 10; i++) {

  proxNumero = numero1 + numero2;
  console.log(proxNumero);
  numero1 = numero2;
  numero2 = proxNumero;
};