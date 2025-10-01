let num = prompt("Digite um numero");
let fat = 1;

for (let n = 2; n <= num; n++) {
  fat *= n;
};

console.log(`O fatorial de ${num} é ${fat}`);