export type PokemonDataType = {
    name: string,
    id: number
    sprites: {
        front_default: string
        front_shiny: string
    }
    types: [{
        Slot: number
        type: { name: string }

    }]
}