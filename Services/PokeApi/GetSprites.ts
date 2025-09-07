// *Importacion de contantes
import { PokeApi } from "../../Core/Constant/PokeApi";
// *Modelos De tipos
import { SpritesType } from "../../Core/Models/Pokemon/SpritesType";

/**
 * * Crea la url de la imagen del sprite de cada pokemon
 * @param Id - Numero de la pokedex del pokemon nacional
 * @returns - Retorna un objeto con la url del sprite normal y shiny
 */
export function GetSprites(Id: string): SpritesType {
    const response: SpritesType = {
        Normal: PokeApi.Sprites.Normal + Id + '.png', // !Concatenacion del sprite normal
        Shiny: PokeApi.Sprites.Shiny + Id + '.png', // !Concatenacion del sprite shiny
    }
    return response;
}