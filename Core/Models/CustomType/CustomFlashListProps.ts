import { DexPokemonType } from "../Pokedex/DexPokemonType";

export type CustomFlashListProps =
    {
        data?: DexPokemonType[],
        loadMore: () => void,
        loading: boolean
    };