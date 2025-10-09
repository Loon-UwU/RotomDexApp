import { Tabs } from 'expo-router';
import { ConfigIcon, HomeIcon, TeamIcon } from '../../Core/Constant/Icons';
import { useColorScheme } from 'nativewind';

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1E1E1E' : '#ffffff',
        },
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="Team"
        options={{
          title: 'equipo',
          tabBarIcon: ({ color }) => <TeamIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="Config"
        options={{
          title: 'Configuracion',
          tabBarIcon: ({ color }) => <ConfigIcon color={color}></ConfigIcon>,
        }}
      />
    </Tabs>
  );
}
