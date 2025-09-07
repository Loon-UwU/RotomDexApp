import { DexPokemonType } from "./DexPokemonType";


// * Modelo de la lista de pokemon de la pokedex selecionada

export type PokedexListPokemonType = {
    id: number // !Identificador de pokedex
    name: string; // !Nombre de la pokedex
    pokemon_entries: DexPokemonType[]; // !lista de los pokemon, numero nombre y url de especie
}