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

    displayPokemonDetails(pokemon) {
        this.pokemonDetailsElement.innerHTML = `
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>Number: ${pokemon.id}</p>
            <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p>Stats: ${pokemon.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</p>
        `;
        this.pokemonDetailsElement.style.display = 'block';
    }

    displayTypes(types) {
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type.name;
            option.textContent = type.name.charAt(0).toUpperCase() + type.name.slice(1);
            this.typeSelectElement.appendChild(option);
        });
    }

    getSearchQuery() {
        return this.searchInputElement.value.trim();
    }

    getSelectedType() {
        return this.typeSelectElement.value;
    }
}
