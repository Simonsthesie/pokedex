document.addEventListener('DOMContentLoaded', () => {
    const model = new PokemonModel();
    const view = new PokemonView();
    const controller = new PokemonController(model, view);
});
