import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { PokemonDataType } from '../../../Core/Models/Pokemon/PokemonDataType';
import { GetPokemonInfo } from '../../../Services/PokeApi/GetPokemonInfo';
import { CustomImage } from '../../../components/common/CustomImage';
import { TypePokemonStyle } from '../../../Core/enums/PokemonTypeColor';
import { HeightIcon, WeightIcon } from '../../../Core/Constant/Icons';
import { GetPokemonSpecie } from '../../../Services/PokeApi/GetPokemonSpecies';
import { PokemonSpeciesType } from '../../../Core/Models/Pokemon/PokemonSpecies';

export default function PokeDetail() {
  const { PokeID } = useLocalSearchParams();
  const [PokemonData, SetPokemonData] = useState<PokemonDataType>();
  const [spriteVisible, setSpriteVisible] = useState<string | undefined>();
  const [Species, setSpecies] = useState<PokemonSpeciesType>();
  const TypeStile = TypePokemonStyle;
  useEffect(() => {
    if (PokeID) {
      GetPokemonInfo(String(PokeID)).then((data) => {
        SetPokemonData(data);
        setSpriteVisible(data.sprites.front_default); // Inicializa el sprite
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

  function toggleSprite() {
    if (!PokemonData) return;
    if (spriteVisible === PokemonData.sprites.front_default)
      setSpriteVisible(PokemonData.sprites.front_shiny);
    else setSpriteVisible(PokemonData.sprites.front_default);
  }

  return (
    <View
      testID="Container"
      className=" flex-1"
      style={{
        backgroundColor: TypeStile.get(PokemonData?.types[0].type.name ?? ''),
      }}
    >
      <Pressable testID="SpriteContainer" onPressIn={toggleSprite}>
        <View testID="Imagenes" className=" items-center justify-center ">
          <CustomImage Url={spriteVisible} width={200} height={200} />
        </View>
      </Pressable>
      <View
        testID="DataContenedor"
        className=" bg-white h-full rounded-t-3xl mx-1"
      >
        <View testID="TypesContenedor" className="mt-5">
          <View testID="Type" className="flex-row">
            <FlatList
              data={PokemonData?.types ?? []}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'center' }}
              keyExtractor={(item) => String(item.Slot ?? Math.random())}
              renderItem={({ item }) => {
                return (
                  <View
                    className=" m-1 p-2 rounded w-28 flex items-center"
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
        <View
          testID="WAHConteiner"
          className="flex-row items-center justify-center mt-5"
        >
          <View testID="Weight" className="w-1/2 items-center">
            <View className="flex-row">
              <WeightIcon color="black"></WeightIcon>
              <Text className="text-gray-400">Weight</Text>
            </View>

            <Text className="font-bold text-2xl">{PokemonData?.weight}</Text>
          </View>
          <View testID="Height" className="w-1/2 items-center">
            <View className="flex-row">
              <HeightIcon color="black"></HeightIcon>
              <Text className="text-gray-400">Height</Text>
            </View>

            <Text className="font-bold text-2xl">{PokemonData?.height}</Text>
          </View>
        </View>
        <View testID="Flavorconteiner" className="mt-5">
          <View testID="Flavor" className="items-center">
            <Text className="font-bold text-xl pb-3">
              {Species?.geniusText}
            </Text>
            <Text className="text-gray-400 text-justify">
              {Species?.flavor_text}
            </Text>
          </View>
        </View>
        <View testID="Statscontenedor">
          <View testID="Stats" className="mt-5 items-center">
            <Text className="font-bold text-2xl">Stats Base</Text>
            <FlatList
              data={PokemonData?.stats ?? []}
              numColumns={3}
              columnWrapperStyle={{ justifyContent: 'center' }}
              keyExtractor={(item) => item.stat.name}
              renderItem={({ item }) => {
                return (
                  <View className="items-center w-24 p-5 m-5 mb-0 pb-0 pt-0 mt-1">
                    <Text className="text-gray-400">
                      {item.stat.name == 'special-attack'
                        ? 'Sp. Atk'
                        : item.stat.name == 'special-defense'
                          ? 'Sp. Def'
                          : item.stat.name}
                    </Text>
                    <Text className="font-bold text-2xl">{item.base_stat}</Text>
                  </View>
                );
              }}
            ></FlatList>
          </View>
        </View>
      </View>
    </View>
  );
}
