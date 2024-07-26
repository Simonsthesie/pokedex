class PokemonController {
    // Le constructeur initialise le modèle, la vue, l'offset et la limite pour la pagination
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.offset = 0; 
        this.limit = 8;  // Nombre de Pokémon affichés par page

        this.init();
    }

    // La méthode init initialise les types de Pokémon et charge la liste de Pokémon
    async init() {
        await this.loadTypes(); // Charger les types de Pokémon dans le menu déroulant
        this.loadPokemonList(); // Charger la liste initiale des Pokémon
        this.addEventListeners(); // Ajouter les écouteurs d'événements pour les interactions utilisateur
    }

    // La méthode loadPokemonList charge la liste de Pokémon avec ou sans filtre de type
    async loadPokemonList() {
        const selectedType = this.view.getSelectedType(); // Récupérer le type sélectionné
        if (selectedType) {
            // Si un type est sélectionné, charger les Pokémon de ce type avec pagination
            const pokemonList = await this.model.getPokemonByType(selectedType, this.offset, this.limit);
            this.view.displayPokemonList(pokemonList);
        } else {
            // Sinon, charger tous les Pokémon avec pagination
            const pokemonList = await this.model.getPokemonList(this.offset, this.limit);
            this.view.displayPokemonList(pokemonList);
        }
    }

    // La méthode loadPokemonDetails charge et affiche les détails d'un Pokémon spécifique
    async loadPokemonDetails(name) {
        const pokemonDetails = await this.model.getPokemonDetails(name); 
        this.view.displayPokemonDetails(pokemonDetails); 
    }

    // La méthode loadTypes charge et affiche les types de Pokémon dans le menu déroulant
    async loadTypes() {
        const types = await this.model.getTypes(); 
        this.view.displayTypes(types); 
    }

    // La méthode addEventListeners ajoute les écouteurs d'événements pour les interactions utilisateur
    addEventListeners() {
        // Écouteur pour les boutons de détails des Pokémon
        document.getElementById('pokemon-list').addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const pokemonName = event.target.dataset.name; // Récupérer le nom du Pokémon à partir du bouton
                this.loadPokemonDetails(pokemonName); 
            }
        });

        // Écouteur pour la recherche de Pokémon
        document.getElementById('search').addEventListener('input', () => {
            const query = this.view.getSearchQuery(); // Récupérer la requête de recherche
            if (query) {
                this.loadPokemonDetails(query.toLowerCase());
            } else {
                this.loadPokemonList(); 
            }
        });

        // Écouteur pour le changement de type dans le menu déroulant
        document.getElementById('type-select').addEventListener('change', () => {
            this.offset = 0;
            this.loadPokemonList(); // Recharger la liste de Pokémon en fonction du type sélectionné
        });

        // Écouteur pour le bouton "Previous" de la pagination
        document.getElementById('prev').addEventListener('click', () => {
            if (this.offset > 0) {
                this.offset -= this.limit; 
                this.loadPokemonList(); // Recharger la liste de Pokémon
            }
        });

        // Écouteur pour le bouton "Next" de la pagination
        document.getElementById('next').addEventListener('click', () => {
            this.offset += this.limit; 
            this.loadPokemonList(); // Recharger la liste de Pokémon
        });
    }
}
