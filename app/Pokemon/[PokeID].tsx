import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { PokemonDataType } from '../../Core/Models/Pokemon/PokemonDataType';
import { GetPokemonInfo } from '../../Services/PokeApi/GetPokemonInfo';

export default function PokeDetail() {
  const { PokeID } = useLocalSearchParams();
  const [PokemonData, SetPokemonData] = useState<PokemonDataType>();

  const nameParam = typeof PokeID === 'string' ? PokeID : PokeID?.[0];
  useEffect(() => {
    if (nameParam) {
      GetPokemonInfo(nameParam).then(SetPokemonData);
    }
  }, [nameParam]);

  return (
    <Text>
      {PokemonData?.name}-{PokemonData?.id}
    </Text>
  );
}
