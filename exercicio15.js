let palindromo = (prompt("Digite uma palavra para verificar se é um palindromo"))
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, '')
.replace(/[^a-z0-9]/g, '');

inverso = palindromo.split('').reverse().join('');

if(palindromo === inverso){
    alert(`A palavra ${palindromo} é um palindromo`);
}else{
    alert(`A palavra ${palindromo} não é um palindromo`);
};