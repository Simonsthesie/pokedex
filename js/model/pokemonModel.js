class PokemonModel {
    constructor() {
        this.apiBaseUrl = 'https://pokeapi.co/api/v2/';
    }

    async getPokemonList(offset = 0, limit = 10) { // Limite définie à 10
        const response = await fetch(`${this.apiBaseUrl}pokemon?offset=${offset}&limit=${limit}`);
        const data = await response.json();
        const results = data.results;
        for (let i = 0; i < results.length; i++) {
            const pokemonDetails = await this.getPokemonDetails(results[i].name);
            results[i].id = pokemonDetails.id;
            results[i].image = pokemonDetails.sprites.front_default;
        }
        return results;
    }

}
