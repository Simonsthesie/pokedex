class PokemonView {
    constructor() {
        this.pokemonListElement = document.getElementById('pokemon-list');
        this.pokemonDetailsElement = document.getElementById('pokemon-details');
        this.searchInputElement = document.getElementById('search');
        this.typeSelectElement = document.getElementById('type-select');
    }

    displayPokemonList(pokemons) {
        this.pokemonListElement.innerHTML = '';
        pokemons.forEach(pokemon => {
            const pokemonItem = document.createElement('div');
            pokemonItem.className = 'pokemon-item';
            pokemonItem.innerHTML = `
                <p>#${pokemon.id}</p>
                <p>${pokemon.name}</p>
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <button data-name="${pokemon.name}">Details</button>
            `;
            this.pokemonListElement.appendChild(pokemonItem);
        });
    }
}
