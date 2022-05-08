function pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;

}
let pokemonName = "Pikachu";
let pokemonType = "Electric";
let pokemonAttackList = ["Thunder Shock", "Thunder Bolt", "Thunder Punch"];
let objPokemon = new pokemon(pokemonName, pokemonType, pokemonAttackList);
pokemon.prototype.callPokemonName = function() {
    console.log(`i choose you ${this.name}`)
}

pokemon.prototype.attack = function(i) {
    console.log(`${this.name } used ${this.attackList[i]}`)
}
objPokemon.callPokemonName()
objPokemon.attack(1)
console.log(objPokemon.attack())