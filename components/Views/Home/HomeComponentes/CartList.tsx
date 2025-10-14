import { ActivityIndicator, FlatList, Pressable } from 'react-native';
import { CustomFlashListProps } from '../../../../Core/Models/CustomType/CustomFlashListProps';
import { GetSprites } from '../../../../Services/PokeApi/GetSprites';
import CartPokemonAnimate, { CartPokemon } from './CartPokemon';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export function CartList({ data, loadMore, loading }: CustomFlashListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.pokemon_species.name)}
      renderItem={({ item, index }) => {
        const spriteUrl = GetSprites(item.pokemon_species.url);

        return (
          <View className="bg-white dark:bg-fondo-secundario rounded-md m-1 shadow shadow-black">
            <CartPokemonAnimate
              id={item.entry_number}
              name={item.pokemon_species.name}
              sprite={spriteUrl.Normal}
              Index={index}
            />
          </View>
        );
      }}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loading ? (
          <LottieView
            source={require('../../../../assets/PokeballLoad.json')}
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
          ></LottieView>
        ) : null
      }
    />
  );
}
