class PokemonController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.offset = 0;
        this.limit = 8;

        this.init();
    }

    async init() {
        await this.loadTypes();
        this.loadPokemonList();
        this.addEventListeners();
    }

    async loadPokemonList() {
        const selectedType = this.view.getSelectedType();
        if (selectedType) {
            const pokemonList = await this.model.getPokemonByType(selectedType, this.offset, this.limit);
            this.view.displayPokemonList(pokemonList);
        } else {
            const pokemonList = await this.model.getPokemonList(this.offset, this.limit);
            this.view.displayPokemonList(pokemonList);
        }
    }

    async loadPokemonDetails(name) {
        const pokemonDetails = await this.model.getPokemonDetails(name);
        this.view.displayPokemonDetails(pokemonDetails);
    }

    async loadTypes() {
        const types = await this.model.getTypes();
        this.view.displayTypes(types);
    }

    addEventListeners() {
        document.getElementById('pokemon-list').addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const pokemonName = event.target.dataset.name;
                this.loadPokemonDetails(pokemonName);
            }
        });

        document.getElementById('search').addEventListener('input', () => {
            const query = this.view.getSearchQuery();
            if (query) {
                this.loadPokemonDetails(query.toLowerCase());
            } else {
                this.loadPokemonList();
            }
        });

        document.getElementById('type-select').addEventListener('change', () => {
            this.offset = 0; // Reset offset when changing type
            this.loadPokemonList();
        });

        document.getElementById('prev').addEventListener('click', () => {
            if (this.offset > 0) {
                this.offset -= this.limit;
                this.loadPokemonList();
            }
        });

        document.getElementById('next').addEventListener('click', () => {
            this.offset += this.limit;
            this.loadPokemonList();
        });
    }
}
