import { ActivityIndicator, FlatList, Pressable } from 'react-native';
import { CustomFlashListProps } from '../../../../Core/Models/CustomType/CustomFlashListProps';
import { GetSprites } from '../../../../Services/PokeApi/GetSprites';
import { CartPokemon } from './CartPokemon';
import { Link } from 'expo-router';

export function CartList({ data, loadMore, loading }: CustomFlashListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.pokemon_species.name)}
      renderItem={({ item }) => {
        const spriteUrl = GetSprites(item.pokemon_species.url);

        return (
          <Link asChild href={`/Pokemon/${item.pokemon_species.name}`}>
            <Pressable>
              <CartPokemon
                id={item.entry_number}
                name={item.pokemon_species.name}
                sprite={spriteUrl.Normal}
              />
            </Pressable>
          </Link>
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
