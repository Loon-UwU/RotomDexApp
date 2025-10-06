import { BasePokeApiModel } from "../../Constant/BasePokeApiModel"

export interface PokemonSpeciesType {
    geniusText: string
    genera: [{
        genus: string
        language: BasePokeApiModel
    }],
    flavor_text: string,
    flavor_text_entries: [{
        flavor_text: string
        language: BasePokeApiModel
        version: BasePokeApiModel
    }]
}