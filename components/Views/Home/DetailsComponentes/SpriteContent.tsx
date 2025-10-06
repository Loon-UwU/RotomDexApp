import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { CustomImage } from '../../../common/CustomImage';
import { SpriteContainerType } from '../../../../Core/Models/CustomType/SpriteContainertype';

export function SpriteContainer({
  normalSprite,
  ShinySprite,
}: SpriteContainerType) {
  const [spriteVisible, setSpriteVisible] = useState<string | undefined>();
  useEffect(() => {
    setSpriteVisible(normalSprite);
  }, [normalSprite]);

  function toggleSprite() {
    if (spriteVisible == normalSprite) setSpriteVisible(ShinySprite);
    else setSpriteVisible(normalSprite);
  }

  return (
    <Pressable testID="SpriteContainer" onPressIn={toggleSprite}>
      <View testID="Imagenes" className=" items-center justify-center ">
        <CustomImage Url={spriteVisible} width={200} height={200} />
      </View>
    </Pressable>
  );
}
