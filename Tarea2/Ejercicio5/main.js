const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },
    { nombre: 'Laura', edad: 19 },
  ];

var mayoresEdad = [];

personas.forEach(persona => {
    if(persona.edad >= 18){
        mayoresEdad.push(persona);
    }
});

mayoresEdad.forEach(mayorEdad => {
    console.log(mayorEdad);
});

console.log();

//Mas joven
var menorEdad;
var contador = 0;
personas.forEach(persona => {
    contador++;
    if(contador == 1){
        menorEdad = persona;
    }
    else{
        if(menorEdad.edad>persona.edad){
            menorEdad = persona;
        }
    }
});

console.log("El nombre del mas joven es " + menorEdad.nombre + " y tiene " + menorEdad.edad + " años.");

console.log();

//Mayor
var mayorEdad;
var contador = 0;
personas.forEach(persona => {
    contador++;
    if(contador == 1){
        mayorEdad = persona;
    }
    else{
        if(mayorEdad.edad<persona.edad){
            mayorEdad = persona;
        }
    }
});

console.log("El nombre del mas mayor es " + mayorEdad.nombre + " y tiene " + mayorEdad.edad + " años.");