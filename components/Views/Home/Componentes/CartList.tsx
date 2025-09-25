import { ActivityIndicator, FlatList } from 'react-native';
import { CustomFlashListProps } from '../../../../Core/Models/CustomType/CustomFlashListProps';
import { GetSprites } from '../../../../Services/PokeApi/GetSprites';
import { CartPokemon } from './CartPokemon';

export function CartList({ data, loadMore, loading }: CustomFlashListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.pokemon_species.name)}
      renderItem={({ item }) => {
        const spriteUrl = GetSprites(item.pokemon_species.url);

        return (
          <CartPokemon
            id={item.entry_number}
            name={item.pokemon_species.name}
            sprite={spriteUrl.Normal}
          />
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
  );
}
