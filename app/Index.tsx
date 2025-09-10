import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { CustomImage } from '../components/common/CustomImage';
import { useEffect, useState } from 'react';
import { GetPokemonDex } from '../Services/PokeApi/GetPokemonDex';
import { PokedexListPokemonType } from '../Core/Models/Pokedex/PokedexListPokemonType';
import { DexPokemonType } from '../Core/Models/Pokedex/DexPokemonType';
import { GetSprites } from '../Services/PokeApi/GetSprites';

export default function Index() {
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 20;
  const [pokedex, setPokedex] = useState<PokedexListPokemonType>();
  const [VisiblePokedex, setVisiblePokedex] = useState<DexPokemonType[]>([]);

  const loadPokedex = async () => {
    setLoading(true);
    try {
      const data = await GetPokemonDex();
      setPokedex(data);
      setVisiblePokedex(data.pokemon_entries.slice(0, PAGE_SIZE));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const loadmore = () => {
    if (Loading) return;
    const nextPage = page + 1;
    const start = (nextPage - 1) * PAGE_SIZE;
    const end = nextPage * PAGE_SIZE;
    if (pokedex != undefined && start < pokedex?.pokemon_entries.length) {
      setVisiblePokedex((prev) => [
        ...prev,
        ...pokedex.pokemon_entries.slice(start, end),
      ]);
      setPage(nextPage);
    }
  };
  useEffect(() => {
    loadPokedex();
  }, []);
  return (
    <FlatList
      data={VisiblePokedex}
      keyExtractor={(item) => String(item.pokemon_species.name)}
      renderItem={({ item }) => {
        const spriteUrl = GetSprites(item.pokemon_species.url);

        return (
          <View className=" bg-gray-600 ">
            <View className="m-2 border-solid border-4 py-0 px-5 flex-row justify-between items-center rounded-md border-gray-800 bg-cyan-900">
              <Text className="text-white">
                #{item.entry_number} {item.pokemon_species.name}
              </Text>
              <CustomImage Url={spriteUrl.Normal}></CustomImage>
            </View>
          </View>
        );
      }}
      onEndReached={loadmore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        Loading ? (
          <ActivityIndicator
            size="large"
            color="white"
            style={{ marginVertical: 10 }}
          />
        ) : null
      }
    />
  );
}
