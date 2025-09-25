/**
 * *Obtiene el numero del pokemon de la pokedex nacional segun pokeapi
 * @param Url - URL de la especie del pokemon = ej: "https://pokeapi.co/api/v2/pokemon-species/1024/"
 * @returns - Id de la pokedex nacinal ej: 1024
 */

export function GetNacionalDexNumber(Url: string): string {
    const match = Url.match(/\/pokemon-species\/(\d+)\//); // !Machea la cadena para ontener el numero de la url de

    if (!match) { // !verifica si fue correcto o no
        throw new Error("URL inválida de Pokémon species");
    }
    return match[1]
}

/**
 * *Obtiene el Ide la la pokedex por la url de la poke api
 * @param Url - URL de la especie del pokemon = ej: "https://pokeapi.co/api/v2/pokedex/2/"
 * @returns - Id de la pokedex nacinal ej: 2
 */

export function GetIdPokedexNumber(Url: string): string {
    const match = Url.match(/\/pokedex\/(\d+)\//); // !Machea la cadena para ontener el numero de la url de

    if (!match) { // !verifica si fue correcto o no
        throw new Error("URL inválida de Pokémon species");
    }
    return match[1]
}