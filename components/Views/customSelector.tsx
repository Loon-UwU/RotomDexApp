import { View } from 'react-native';
import { PokedexType } from '../../Core/Models/Pokedex/PokedexType';
import { GetIdPokedexNumber } from '../../Services/PokeApi/GetIds';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

type Props = {
  data?: PokedexType;
  onValueChange?: (value: number | null) => void; // callback opcional
};

export default function PokedexSelectorHome({ data, onValueChange }: Props) {
  if (!data) {
    return;
  }
  const options = data.results.map((item) => ({
    label: item.name,
    value: GetIdPokedexNumber(item.url),
  }));

  return (
    <View className="px-4 bg-gray-600 text-white">
      <RNPickerSelect
        onValueChange={(value) => {
          if (onValueChange) onValueChange(value);
        }}
        items={options}
        placeholder={{ label: 'Seleccionar Pokedex...', value: null }}
      />
    </View>
  );
}
