import { PokeApi } from "../../Core/Constant/PokeApi";
import { PokemonSpeciesType } from "../../Core/Models/Pokemon/PokemonSpecies";

/**  
    * *Obtiene los datos de un 
    @param name - Nombre del pokemon a buscar
    * @returns - los datos de la especie pokemon
*/
export async function GetPokemonSpecie(name: string): Promise<PokemonSpeciesType> {
    const response = await fetch(PokeApi.Species + name); // !Realiza la peticion a la PokeApi
    if (!response.ok) { // !verifica si la peticion fallo
        throw new Error('No se pudo obeterner la lista de pokemon')
    }
    return response.json(); // !retorna la pokedex con la lista
}