import { Image } from 'react-native';
import { CustomImageProps } from '../../Core/Models/CustomType/CustomImageProps';

export function CustomImage({
  Url,
  width = 60,
  height = 60,
}: CustomImageProps) {
  return (
    <Image
      source={{
        uri: Url,
      }}
      style={{ height, width }}
      resizeMode="contain"
    ></Image>
  );
}
