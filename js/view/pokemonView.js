class PokemonView {
    // Le constructeur initialise les références aux éléments DOM nécessaires
    constructor() {
        this.pokemonListElement = document.getElementById('pokemon-list'); // Élément de la liste des Pokémon
        this.pokemonDetailsElement = document.getElementById('pokemon-details'); // Élément des détails d'un Pokémon
        this.searchInputElement = document.getElementById('search'); // Élément du champ de recherche
        this.typeSelectElement = document.getElementById('type-select'); // Élément du menu déroulant pour les types de Pokémon
    }

    // La méthode displayPokemonList affiche la liste des Pokémon
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
            this.pokemonListElement.appendChild(pokemonItem); // Ajouter l'élément à la liste des Pokémon
        });
    }

    // La méthode displayPokemonDetails affiche les détails d'un Pokémon spécifique
    displayPokemonDetails(pokemon) {
        this.pokemonDetailsElement.innerHTML = `
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>Number: ${pokemon.id}</p>
            <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p>Stats: ${pokemon.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</p>
        `;
        this.pokemonDetailsElement.style.display = 'block'; // Afficher l'élément des détails du Pokémon
    }

    // La méthode displayTypes affiche les types de Pokémon dans le menu déroulant
    displayTypes(types) {
        types.forEach(type => {
            const option = document.createElement('option'); 
            option.textContent = type.name.charAt(0).toUpperCase() + type.name.slice(1);
            this.typeSelectElement.appendChild(option); 
        });
    }

    // La méthode getSearchQuery retourne la valeur du champ de recherche
    getSearchQuery() {
        return this.searchInputElement.value.trim(); 
    }

    // La méthode getSelectedType retourne la valeur du type sélectionné dans le menu déroulant
    getSelectedType() {
        return this.typeSelectElement.value; // Retourner la valeur du type sélectionné
    }
}
