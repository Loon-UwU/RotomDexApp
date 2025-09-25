import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';
import { PokedexService } from '../../Services/hooks/PokedexServices';
import PokedexSelectorHome from '../../components/Views/customSelector';
import { GetSprites } from '../../Services/PokeApi/GetSprites';
import { CustomImage } from '../../components/common/CustomImage';

export default function Index() {
  const { loading, visiblePokedex, loadMore, reaload, PokedexList } =
    PokedexService();
  return (
    <View>
      <PokedexSelectorHome
        data={PokedexList}
        onValueChange={(id) => {
          if (id != null) {
            reaload(id);
          }
        }}
      />

      <FlatList
        className="bg-gray-600"
        data={visiblePokedex}
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
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              size="large"
              color="white"
              style={{ marginVertical: 10 }}
            />
          ) : null
        }
      />
    </View>
  );
}
