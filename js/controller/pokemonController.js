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
}
