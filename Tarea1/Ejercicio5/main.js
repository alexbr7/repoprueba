var pokemons = ['Bulbasur', 'Charmander', 'Squirtle'];

console.log(pokemons[0]);
console.log(pokemons[1]);
console.log(pokemons[2]);

console.log("");
pokemons.forEach(pokemon => {
    console.log(pokemon + " ")
});

console.log("");

var starters = "";
pokemons.forEach(pokemon => {
    starters += pokemon + " ";    
});
starters.trim;
console.log(starters);