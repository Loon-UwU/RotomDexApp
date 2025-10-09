import { Stack } from 'expo-router';
import '../global.css';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';
export default function Layaout() {
  const { colorScheme } = useColorScheme();
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1E1E1E' : '#ffffff',
          },
          headerTintColor: 'red',
          headerTitle: 'Rotom Dex',
          headerShadowVisible: false,
        }}
      />
    </View>
  );
}
