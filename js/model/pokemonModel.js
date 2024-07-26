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

    async getPokemonDetails(name) {
        const response = await fetch(`${this.apiBaseUrl}pokemon/${name}`);
        const data = await response.json();
        return data;
    }

    async getTypes() {
        const response = await fetch(`${this.apiBaseUrl}type`);
        const data = await response.json();
        return data.results;
    }

    async getPokemonByType(type, offset = 0, limit = 10) {
        const response = await fetch(`${this.apiBaseUrl}type/${type}`);
        const data = await response.json();
        const pokemons = data.pokemon.map(p => p.pokemon).slice(offset, offset + limit);
        const results = [];
        for (let i = 0; i < pokemons.length; i++) {
            const pokemonDetails = await this.getPokemonDetails(pokemons[i].name);
            results.push({
                name: pokemons[i].name,
                id: pokemonDetails.id,
                image: pokemonDetails.sprites.front_default
            });
        }
        return results;
    }
}
