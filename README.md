# Pokédex Expo App

Esta es una app de **React Native** creada con **Expo** y **TypeScript**, usando **Expo Router** para la navegación y consumiendo la **PokéAPI** para mostrar Pokémon y sus sprites.

---

## 🔹 Requisitos

- Node.js >= 18
- npm o yarn
- Expo Go (opcional, para probar en móvil)

---

## 🔹 Instalación

Clona el repositorio:

```bash
git clone <https://github.com/Loon-UwU/RotomDexApp.git>
cd <RotomDexApp>

npm install
# o con yarn
yarn

```

# Revisar errores de código

npx expo lint

# Arreglar automáticamente

npx expo lint --fix

# Formatear con Prettier

npm run format

Core/ # Modelos y utiledades
app/ # Páginas de la app (Expo Router)
services/ # Lógica para consumir la PokéAPI
App.tsx # Entrada principal (solo importa 'expo-router/entry')
