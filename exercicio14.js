let ano = parseInt(prompt("Digite o ano para verificar se é bissexto"));

if(ano % 4 == 0){
    alert(`O ano ${ano} é bissexto`);
}else{
    alert(`O ano ${ano} não é bissexto`);
};