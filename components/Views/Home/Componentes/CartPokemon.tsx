import { Animated, Pressable, Text, View } from 'react-native';
import { CustomImage } from '../../../common/CustomImage';
import { CustomCartpokemonProps } from '../../../../Core/Models/CustomType/CustomCartpokemonProps';
import { Link } from 'expo-router';
import { use, useEffect, useRef } from 'react';
import { getCycledIdnex } from '../../../../Services/hooks/getCycledIdnex';

export function CartPokemon({ id, name, sprite }: CustomCartpokemonProps) {
  return (
    <Link asChild href={`/Pokemon/PokeDetails/${name}`}>
      <Pressable>
        <View>
          <View className="m-2 border-solid border-4 py-0 px-5 flex-row justify-between items-center rounded-md border-gray-800 bg-cyan-900">
            <Text className="text-white">
              #{id}-{name}
            </Text>
            <CustomImage Url={sprite}></CustomImage>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export default function CartPokemonAnimate({
  id,
  name,
  sprite,
  Index,
}: CustomCartpokemonProps) {
  const Opacity = useRef(new Animated.Value(0)).current;
  const realIndex = getCycledIdnex(Index);
  useEffect(() => {
    Animated.timing(Opacity, {
      toValue: 1,
      duration: 1000,
      delay: realIndex ? realIndex * 150 : 0,
      useNativeDriver: true,
    }).start();
  }, [Opacity, Index]);

  return (
    <Animated.View style={{ opacity: Opacity }}>
      <CartPokemon id={id} name={name} sprite={sprite} />
    </Animated.View>
  );
}
