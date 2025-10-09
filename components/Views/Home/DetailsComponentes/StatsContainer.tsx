import { View, Text, FlatList } from 'react-native';
import { StatsConteinerType } from '../../../../Core/Models/CustomType/StatscontainerType';

export function Statsconteiner({ stats }: StatsConteinerType) {
  return (
    <View testID="Statscontenedor" className="h-48">
      <View testID="Stats" className="mt-5 items-center">
        <Text className="font-bold text-2xl">Stats Base</Text>
        <FlatList
          data={stats ?? []}
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
  );
}
