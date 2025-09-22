for (let num = 2; num <= 100; num++) {
    let ePrimo = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            ePrimo = false;
            break;
        }
    }

    if (ePrimo) {
        console.log(`o ${num} é primo`);
    }
}