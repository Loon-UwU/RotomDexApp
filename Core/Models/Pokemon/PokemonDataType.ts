import { BasePokeApiModel } from "../../Constant/BasePokeApiModel"

export interface PokemonDataType extends BasePokeApiModel {
    id: number
    sprites: {
        front_default: string
        front_shiny: string
    }
    types: [{
        Slot: number
        type: BasePokeApiModel

    }]
}