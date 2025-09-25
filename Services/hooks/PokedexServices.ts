import { useEffect, useState } from "react";
import { PokedexListPokemonType } from "../../Core/Models/Pokedex/PokedexListPokemonType";
import { DexPokemonType } from "../../Core/Models/Pokedex/DexPokemonType";
import { GetPokemonDex } from "../PokeApi/GetPokemonDex";
import { PokedexType } from "../../Core/Models/Pokedex/PokedexType";
import { GetPokedexList } from "../PokeApi/GetPokedexList";

export function PokedexService(pageSize = 20) {
    /*
        *Variables a usar 
    */
    const [loading, setLoading] = useState(false); // !Variable de carga
    const [page, setPage] = useState(1); // !Pagina actual
    const [pokedex, setPokedex] = useState<PokedexListPokemonType>(); // !Pokedex entera
    const [visiblePokedex, setVisiblePokedex] = useState<DexPokemonType[]>([]); // !Pokedex Visible
    const [PokedexList, SetPokedexList] = useState<PokedexType>()

    /**
     * *Cargado de los datos de la pokedex usando la pokeApi
     */
    const loadPokedex = async (Id: number = 1) => {
        setLoading(true); // *inicia la carga
        setPage(1) // !Reinicia la pagina si se carga una nueva pokedex
        try {
            const data = await GetPokemonDex(Id); // *Obtiene los datos de la pokeApi
            const PokedeData: PokedexType = await GetPokedexList()
            setPokedex(data); // Añade los datos a la pokedex entera
            SetPokedexList(PokedeData)
            setVisiblePokedex(data.pokemon_entries.slice(0, pageSize)); // * Limita los pokemon sisibles a 20
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // !Finaliza la carga
        }
    };
    /**
     * Carga mas pokemon a la lista visible
     */
    const loadMore = () => {
        if (loading) return; // !Si esta cargando aun no hace nada
        const nextPage = page + 1; // siguiente pagina
        const start = (nextPage - 1) * pageSize; // Obtiene desde donde inicia los nuevos datos
        const end = nextPage * pageSize; //obtiene hasta el final de la lista

        if (pokedex && start < pokedex.pokemon_entries.length) { // !Verifica si la pokedex existe y si el inicio es menor a la lista
            setVisiblePokedex((prev) => [
                ...prev, // !Lista previa
                ...pokedex.pokemon_entries.slice(start, end), // !Nueva lista
            ]);
            setPage(nextPage); // * cambia de pagina
        }
    };

    useEffect(() => {
        loadPokedex(1); // !Ejecuta la carga de los datos
    }, []);
    //Retorna los datos utiles
    return {
        loading,
        pokedex,
        visiblePokedex,
        PokedexList,
        loadMore,
        reaload: loadPokedex
    };

}