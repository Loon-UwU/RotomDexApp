import { View, Text } from 'react-native';
import { NameConteinerType } from '../../../../Core/Models/CustomType/NameContainertype';

export function NameConteiner({ id, name }: NameConteinerType) {
  return (
    <View testID="Namecontent" className="mt-5">
      <Text className="text-white font-bold text-2xl">
        #{id} {name}
      </Text>
    </View>
  );
}
