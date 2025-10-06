import { View, Text } from 'react-native';
import { FlavorContainertype } from '../../../../Core/Models/CustomType/FlavorContainertype';

export function Flavorconteiner({
  flavor_text,
  geniusText,
}: FlavorContainertype) {
  return (
    <View testID="Flavorconteiner" className="mt-5">
      <View testID="Flavor" className="items-center">
        <Text className="font-bold text-xl pb-3">{geniusText}</Text>
        <Text className="text-gray-400 text-justify">{flavor_text}</Text>
      </View>
    </View>
  );
}
