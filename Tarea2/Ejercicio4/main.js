function parOImpar(numero){
    if(numero % 2 == 0){
        console.log("Es par");
    }
    else{
        console.log("Es impar");
    }
}

parOImpar(3);

const parOImparArrow = numero => (numero%2==0)? console.log("par") : console.log("impar");
parOImparArrow(3);
parOImparArrow(4);
