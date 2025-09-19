let mes = (prompt("Digite o mẽs para saber quantos dias tem"));

switch (mes.toLowerCase()){
    case "janeiro":
    case "março":   
    case "maio":
    case "julho":
    case "agosto":
    case "outubro":
    case "dezembro": 
        alert(`O mês de ${mes} tem 31 dias.`);
        break;
    case "abril":
    case "junho":
    case "setembro":
    case "novembro":
        alert(`O mês de ${mes} tem 30 dias.`);
        break;
    case "fevereiro":
        alert(`O mês de ${mes} tem 28 dias, em ano bissexto tem 29 dias.`);
        break;
    default:
        alert(`${mes} Invalido, digite um mês valido`);
};                                   