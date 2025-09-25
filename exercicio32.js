let escolha = prompt("Digite 1 para pedra, 2 para papel, 3 para tesoura, digite 4 para finalizar o jogo");

while (escolha <= 3){
    let computador = Math.floor(Math.random()*3) + 1;
   
    if(escolha == 3 && computador == 2){
        alert(`Você selecionou tesoura e eu papel, Vocẽ venceu`);
    } else if (escolha == 2 && computador == 1){ 
        alert(`Você selecionou papel e eu pedra, Vocẽ venceu`);
    }else if (escolha == 1 && computador == 3){
        alert(`Você selecionou pedra e eu tesoura, Vocẽ venceu`);
    }else if (escolha == 3 && computador == 1){
        alert(`Você selecionou tesoura e eu pedra, Vocẽ perdeu, tente novamente`);
    }else if (escolha == 2 && computador == 3){
        alert(`Você selecionou papel e eu tesoura, Vocẽ perdeu, tente novamente`);
    }else if (escolha == 1 && computador == 2){
        alert(`Você selecionou pedra e eu papel, Vocẽ perdeu, tente novamente`);
    } else {
        alert("Empatou")
    }  
    escolha = prompt("Digite 1 para pedra, 2 para papel, 3 para tesoura, digite 4 para finalizar o jogo"); 

};
if(escolha >=4){
    alert("Você saiu do jogo!");
};