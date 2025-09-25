// *Importacion de contantes
import { PokeApi } from "../../Core/Constant/PokeApi";
// *Modelos De tipos
import { PokedexListPokemonType } from "../../Core/Models/Pokedex/PokedexListPokemonType";

/**  
    * *Obtiene una lista de pokemon de la pokedex selecionada
    @param Id - Id de la pokedex que se obtendra la lista de pokemon
    * @returns - la pokedex con la lista de pokemon en ella
*/
export async function GetPokemonDex(Id: number = 1): Promise<PokedexListPokemonType> {
    const response = await fetch(PokeApi.Pokedex + Id); // !Realiza la peticion a la PokeApi
    if (!response.ok) { // !verifica si la peticion fallo
        throw new Error('No se pudo obeterner la lista de pokemon')
    }
    return response.json(); // !retorna la pokedex con la lista
}