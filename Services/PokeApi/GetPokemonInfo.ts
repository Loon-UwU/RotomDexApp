import { PokeApi } from "../../Core/Constant/PokeApi";
import { PokemonDataType } from "../../Core/Models/Pokemon/PokemonDataType";

/**  
    * *Obtiene los datos de un 
    @param name - Nombre del pokemon a buscar
    * @returns - los datos del pokemon a buscar
*/
export async function GetPokemonInfo(name: string): Promise<PokemonDataType> {
    const response = await fetch(PokeApi.Pokemon + name); // !Realiza la peticion a la PokeApi
    if (!response.ok) { // !verifica si la peticion fallo
        throw new Error('No se pudo obeterner la lista de pokemon')
    }
    const data = await response.json();
    return data as PokemonDataType; // !retorna la pokedex con la lista
}