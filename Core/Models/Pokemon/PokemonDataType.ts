import { BasePokeApiModel } from "../../Constant/BasePokeApiModel"

export interface PokemonDataType extends BasePokeApiModel {
    id: number
    weight: number
    height: number
    abilities: [{
        slot: number
        is_hidden: boolean
        ability: BasePokeApiModel
    }]
    sprites: {
        front_default: string
        front_shiny: string
    }
    types: [{
        Slot: number
        type: BasePokeApiModel

    }]
    stats: [
        {
            base_stat: number
            stat: BasePokeApiModel
        }
    ]
}