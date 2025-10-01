for (let num = 1; num <= 100; num++) {
    let soma = 0;

    for (let n = 1; n < num; n++) {
        if (num % n === 0) {
            soma += n;
        };
    };
    if (soma === num) {
        console.log(`Numero perfeito: ${num}`);
    };
};