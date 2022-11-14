function cuadradoDe(numero){
    return numero * numero
}

console.log(cuadradoDe(2));

cuadradoDeArrow = numero => numero*numero;
console.log("El cuadrado de 2 es", cuadradoDeArrow(2));