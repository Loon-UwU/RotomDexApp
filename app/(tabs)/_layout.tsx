import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#4b5563' },
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="Team"
        options={{
          title: 'equipo',
        }}
      />
      <Tabs.Screen
        name="Config"
        options={{
          title: 'Configuracion',
        }}
      />
    </Tabs>
  );
}
