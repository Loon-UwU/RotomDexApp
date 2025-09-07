// * Modelo de la especies para la lista de pokedex
// ! es solo para la lista de pokemon de cada pokedex
export type DexPokemonType = {
    entry_number: number; //!Numero dentro de la pokedex
    pokemon_species: {
        name: string; //!Nombre del pokemon
        url: string; //!Url de la especie
    };
};
