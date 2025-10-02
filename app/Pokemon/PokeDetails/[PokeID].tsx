import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { PokemonDataType } from '../../../Core/Models/Pokemon/PokemonDataType';
import { GetPokemonInfo } from '../../../Services/PokeApi/GetPokemonInfo';
import { CustomImage } from '../../../components/common/CustomImage';
import { TypePokemonStyle } from '../../../Core/enums/PokemonTypeColor';

export default function PokeDetail() {
  const { PokeID } = useLocalSearchParams();
  const [PokemonData, SetPokemonData] = useState<PokemonDataType>();
  const [spriteVisible, setSpriteVisible] = useState<string | undefined>();
  const TypeStile = TypePokemonStyle;
  useEffect(() => {
    if (PokeID) {
      GetPokemonInfo(String(PokeID)).then((data) => {
        SetPokemonData(data);
        setSpriteVisible(data.sprites.front_default); // Inicializa el sprite
      });
    }
  }, [PokeID]);

  function toggleSprite() {
    if (!PokemonData) return;
    if (spriteVisible === PokemonData.sprites.front_default)
      setSpriteVisible(PokemonData.sprites.front_shiny);
    else setSpriteVisible(PokemonData.sprites.front_default);
  }

  return (
    <View testID="Container" className=" flex-1">
      <Pressable onPressIn={toggleSprite}>
        <View
          testID="Imagenes"
          className=" items-center justify-center bg-stone-700 "
        >
          <CustomImage Url={spriteVisible} width={200} height={200} />
        </View>
      </Pressable>
      <View testID="TypesContenedor">
        <View testID="Type" className="flex-row">
          <FlatList
            data={PokemonData?.types ?? []}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'center' }}
            keyExtractor={(item) => String(item.Slot ?? Math.random())}
            renderItem={({ item }) => {
              return (
                <View
                  className="bg-orange-800  m-1 p-2 rounded w-28 flex items-center"
                  style={{ backgroundColor: TypeStile.get(item.type.name) }}
                >
                  <Text className="text-white ">
                    {item.type.name.toLocaleUpperCase()}
                  </Text>
                </View>
              );
            }}
          ></FlatList>
        </View>
      </View>
      <View testID="Statscontenedor">
        <View testID="Stats" className="items-center">
          <FlatList
            data={PokemonData?.stats ?? []}
            numColumns={6}
            columnWrapperStyle={{ justifyContent: 'center' }}
            keyExtractor={(item) => item.stat.name}
            renderItem={({ item }) => {
              return (
                <View className="m-0.1 items-center w-15 border border-gray-300 rounded mr-1">
                  <Text className="border-b-2">{item.stat.name}</Text>
                  <Text>{item.base_stat}</Text>
                </View>
              );
            }}
          ></FlatList>
        </View>
      </View>
      <Text>
        {PokemonData?.name}-{PokemonData?.id}
      </Text>
    </View>
  );
}
