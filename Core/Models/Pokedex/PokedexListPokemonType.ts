import { BasePokeApiModel } from "../../Constant/BasePokeApiModel";
import { DexPokemonType } from "./DexPokemonType";


// * Modelo de la lista de pokemon de la pokedex selecionada

export interface PokedexListPokemonType extends BasePokeApiModel {
    id: number // !Identificador de pokedex
    pokemon_entries: DexPokemonType[]; // !lista de los pokemon, numero nombre y url de especie
}