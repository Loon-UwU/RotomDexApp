import { FlatList, View, Text } from 'react-native';
import { TypePokemonStyle } from '../../../../Core/enums/PokemonTypeColor';
import { typeConteinerType } from '../../../../Core/Models/CustomType/TypeConteiner.type';

export function TypeConteiner({ data }: typeConteinerType) {
  const TypeStile = TypePokemonStyle;

  return (
    <View testID="TypesContenedor" className="mt-5">
      <View testID="Type" className="flex-row">
        <FlatList
          data={data ?? []}
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
  );
}
