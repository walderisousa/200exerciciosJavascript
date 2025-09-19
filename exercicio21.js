let mes = (prompt("Digite o mẽs para saber qual estação pertence"));

switch (mes.toLowerCase()){
    case "dezembro":
    case "janeiro":
    case "fevereiro":
        alert(`O mês de ${mes} é Verão`);
        break;
    case "março":
    case "abril":
    case "maio":
        alert(`O mês de ${mes} é Outono`);
        break;
    case "junho":
    case "julho":
    case "agosto":
        alert(`O mês de ${mes} é Inverno`);
        break;
    case "setembro":
    case "outubro":
    case "novembro":
        alert(`O mês de ${mes} é Primavera`);
        break;
    default:
        alert(`${mes} Invalido, digite um mês valido`);
};                                   