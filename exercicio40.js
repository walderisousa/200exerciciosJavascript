let texto = prompt("Digite uma palavra");

let inverso = "";
let indice = texto.length - 1;


while (indice >= 0) {
  inverso += texto[indice];
  indice--;
};

console.log(`Palavra invertida: ${inverso}`);