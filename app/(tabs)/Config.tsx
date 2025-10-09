import { Pressable, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';

export default function Config() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [enabled, setEnabled] = useState(false);
  return (
    <View className="flex-1 bg-white dark:bg-fondo-base p-2">
      <View className="m-2">
        <Text className="text-black dark:text-texto-principal font-bold text-2xl">
          Apariencia
        </Text>
      </View>
      <View className="flex-1">
        <View className="">
          <Text className="text-black dark:text-texto-principal font-bold text-xl">
            Modo Oscuro
          </Text>

          <Switch
            className="bg-white"
            value={enabled}
            onValueChange={(enabled) => {
              setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
              setEnabled(enabled);
            }}
            trackColor={{ false: '#1E1E1E', true: '#A0A0A0' }}
            thumbColor={enabled ? '#ff0000' : '#ff0000'}
            style={{ width: 40, height: 30 }}
          ></Switch>
        </View>
      </View>
    </View>
  );
}
