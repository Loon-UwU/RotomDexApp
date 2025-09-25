import { Text, View } from 'react-native';
import { CustomImage } from '../../../common/CustomImage';
import { CustomCartpokemonProps } from '../../../../Core/Models/CustomType/CustomCartpokemonProps';

export function CartPokemon({ id, name, sprite }: CustomCartpokemonProps) {
  return (
    <View>
      <View className="m-2 border-solid border-4 py-0 px-5 flex-row justify-between items-center rounded-md border-gray-800 bg-cyan-900">
        <Text className="text-white">
          #{id}-{name}
        </Text>
        <CustomImage Url={sprite}></CustomImage>
      </View>
    </View>
  );
}
