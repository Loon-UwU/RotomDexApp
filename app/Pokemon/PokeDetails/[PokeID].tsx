import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { PokemonDataType } from '../../../Core/Models/Pokemon/PokemonDataType';
import { GetPokemonInfo } from '../../../Services/PokeApi/GetPokemonInfo';

export default function PokeDetail() {
  const { PokeID } = useLocalSearchParams();
  const [PokemonData, SetPokemonData] = useState<PokemonDataType>();

  useEffect(() => {
    if (PokeID) {
      GetPokemonInfo(String(PokeID)).then(SetPokemonData);
    }
  }, [PokeID]);

  return (
    <Text>
      {PokemonData?.name}-{PokemonData?.id}
    </Text>
  );
}
