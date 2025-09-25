import { PokeApi } from "../../Core/Constant/PokeApi";
import { PokedexType } from "../../Core/Models/Pokedex/PokedexType";

/**
 * Obtiene la lsita de todas las pokedex
 * @returns Retorma lista de pokedex tipo PokedexType
 */
export async function GetPokedexList(): Promise<PokedexType> {
    const response = await fetch(PokeApi.Pokedex); // !Realiza la peticion a la PokeApi
    if (!response.ok) { // !verifica si la peticion fallo
        throw new Error('No se pudo obeterner la lista de pokemon')
    }
    return response.json(); // !retorna la pokedexs
}
