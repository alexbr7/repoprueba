pokemons = [
    pokemon = {
        nombre : "Pikachu",
        tipo : "Electrico"
    },
    pokemon = {
        nombre: "Bulbasur",
        tipo : "Planta"
    },
    pokemon = {
        nombre: "Charizard",
        tipo: "Fuego"
    }
]

pokemons.forEach(pokemon => {
    if(pokemon.tipo == "Fuego"){
        console.log("El pokemon " + pokemon.nombre + " es de fuego!!")
    }
    else{
        console.log("El pokemon " + pokemon.nombre + " no es de fuego.")
    }
});