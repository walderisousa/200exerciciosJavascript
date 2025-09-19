let semaforo = (prompt("Digite a cor do semáforo (verde, amarelo ou vermelho)"));

switch (semaforo.toLowerCase()){
    case "verde":
        alert(`O semaforo está ${semaforo}, você pode seguir.`);
        break;
    case "amarelo":
        alert(`O semaforo está ${semaforo}, reduza a velocidade e tenha atenção.`);
        break;
    case "vermelho":
        alert(`O semaforo está ${semaforo}, você deve parar.`);        
        break;
    default:
        alert(`${semaforo} Invalido, digite uma cor valida(verde, amarelo ou vermelho)`);
};                                   