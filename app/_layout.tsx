import { Stack } from 'expo-router';
import '../global.css';
import { Text, View } from 'react-native';
export default function Layaout() {
  return (
    <View className="flex-1 bg-gray-600">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'transparent' },
          headerTintColor: 'red',
          headerTitle: 'Rotom Dex',
          headerShadowVisible: false,
        }}
      />
    </View>
  );
}
