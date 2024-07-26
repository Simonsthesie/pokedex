class PokemonModel {
    // Le constructeur initialise l'URL de base de l'API PokeAPI
    constructor() {
        this.apiBaseUrl = 'https://pokeapi.co/api/v2/';
    }

    // La méthode getPokemonList récupère une liste de Pokémon avec pagination
    async getPokemonList(offset = 0, limit = 8) { // Limite définie à 8 par défaut
        const response = await fetch(`${this.apiBaseUrl}pokemon?offset=${offset}&limit=${limit}`); // Requête à l'API pour obtenir la liste des Pokémon
        const data = await response.json(); 
        const results = data.results; 
        // Pour chaque Pokémon dans les résultats, récupérer les détails supplémentaires
        for (let i = 0; i < results.length; i++) {
            const pokemonDetails = await this.getPokemonDetails(results[i].name); 
            results[i].id = pokemonDetails.id; 
            results[i].image = pokemonDetails.sprites.front_default; 
        }
        return results; 
    }

    // La méthode getPokemonDetails récupère les détails d'un Pokémon spécifique par son nom
    async getPokemonDetails(name) {
        const response = await fetch(`${this.apiBaseUrl}pokemon/${name}`); // Requête à l'API pour obtenir les détails du Pokémon
        const data = await response.json(); 
        return data; 
    }

    // La méthode getTypes récupère la liste des types de Pokémon
    async getTypes() {
        const response = await fetch(`${this.apiBaseUrl}type`); // Requête à l'API pour obtenir la liste des types de Pokémon
        const data = await response.json(); 
        return data.results; 
    }

    // La méthode getPokemonByType récupère les Pokémon d'un type spécifique avec pagination
    async getPokemonByType(type, offset = 0, limit = 10) {
        const response = await fetch(`${this.apiBaseUrl}type/${type}`); // Requête à l'API pour obtenir la liste des Pokémon par type
        const data = await response.json(); 
        const pokemons = data.pokemon.map(p => p.pokemon).slice(offset, offset + limit); 
        const results = [];
        // Pour chaque Pokémon dans les résultats, récupérer les détails supplémentaires
        for (let i = 0; i < pokemons.length; i++) {
            const pokemonDetails = await this.getPokemonDetails(pokemons[i].name); 
            results.push({
                name: pokemons[i].name,
                id: pokemonDetails.id, 
                image: pokemonDetails.sprites.front_default 
            });
        }
        return results; // Retourner la liste des Pokémon avec les détails supplémentaires
    }
}
