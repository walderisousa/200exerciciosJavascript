let numero = 1;
while(numero <= 100){

  if(numero % 3 == 0){
    console.log(`${numero} Fizz`);
  }else if(numero % 5 == 0){
    console.log(`${numero} Buzz`);
  } else{
    console.log(`${numero} FizzBuzz`);
  }
  numero++;
};