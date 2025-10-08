import { Stack } from 'expo-router';
import '../global.css';
import { View } from 'react-native';
export default function Layaout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: 'red',
          headerTitle: 'Rotom Dex',
          headerShadowVisible: false,
        }}
      />
    </View>
  );
}
