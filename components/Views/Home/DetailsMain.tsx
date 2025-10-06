import { useEffect, useState } from 'react';
import { TypePokemonStyle } from '../../../Core/enums/PokemonTypeColor';
import { PokemonSpeciesType } from '../../../Core/Models/Pokemon/PokemonSpecies';

import { PokemonDataType } from '../../../Core/Models/Pokemon/PokemonDataType';
import { GetPokemonInfo } from '../../../Services/PokeApi/GetPokemonInfo';
import { GetPokemonSpecie } from '../../../Services/PokeApi/GetPokemonSpecies';
import { View } from 'react-native';
import { SpriteContainer } from './DetailsComponentes/SpriteContent';
import { TypeConteiner } from './DetailsComponentes/TypeContent';
import { Flavorconteiner } from './DetailsComponentes/Flavorcontainer';
import { Statsconteiner } from './DetailsComponentes/StatsContainer';
import { DetailMainType } from '../../../Core/Models/CustomType/DetailmainType';

export function DetailsMain({ PokeID }: DetailMainType) {
  const [PokemonData, SetPokemonData] = useState<PokemonDataType>();
  const [Species, setSpecies] = useState<PokemonSpeciesType>();
  const TypeStile = TypePokemonStyle;
  useEffect(() => {
    if (PokeID) {
      GetPokemonInfo(String(PokeID)).then((data) => {
        SetPokemonData(data); // Inicializa el sprite
      });
      GetPokemonSpecie(String(PokeID)).then((data) => {
        const flavor = data.flavor_text_entries.find(
          (item) => item.language.name === 'es',
        );
        const genius = data.genera.find((item) => item.language.name === 'es');
        setSpecies({
          ...data,
          flavor_text: flavor
            ? flavor.flavor_text
            : 'Sin descripción disponible.',
          geniusText: genius?.genus ? genius.genus : 'Sin tipo de asignado.',
        });
      });
    }
  }, [PokeID]);

  return (
    <View
      testID="Container"
      className=" flex-1"
      style={{
        backgroundColor: TypeStile.get(PokemonData?.types[0].type.name ?? ''),
      }}
    >
      <SpriteContainer
        normalSprite={PokemonData?.sprites.front_default}
        ShinySprite={PokemonData?.sprites.front_shiny}
      ></SpriteContainer>
      <View
        testID="DataContenedor"
        className=" bg-white h-full rounded-t-3xl mx-1"
      >
        <TypeConteiner data={PokemonData?.types}></TypeConteiner>
        <Flavorconteiner
          flavor_text={Species?.flavor_text}
          geniusText={Species?.geniusText}
        ></Flavorconteiner>
        <Statsconteiner stats={PokemonData?.stats}></Statsconteiner>
      </View>
    </View>
  );
}
