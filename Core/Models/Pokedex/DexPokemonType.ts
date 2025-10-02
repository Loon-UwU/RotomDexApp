// * Modelo de la especies para la lista de pokedex

import { BasePokeApiModel } from "../../Constant/BasePokeApiModel";

// ! es solo para la lista de pokemon de cada pokedex
export interface DexPokemonType {
    entry_number: number; //!Numero dentro de la pokedex
    pokemon_species: BasePokeApiModel; //! Nombre y url de la especie
};
