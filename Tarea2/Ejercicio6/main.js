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

function mostrarPokemons(lista){
    lista.forEach(pokemon => {
        console.log(pokemon.nombre)
    });
}

mostrarPokemons(pokemons);

function mostrarPokemonsDeFuego(lista){
    lista.forEach(pokemon => {
        if(pokemon.tipo == "Fuego"){
            console.log(pokemon.nombre)
        }
    });
}
console.log();
console.log("Ahora se mostraran solo los de fuego:");
mostrarPokemonsDeFuego(pokemons);





