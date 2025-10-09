/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        fondo: {
          base: '#121212', // Fondo principal muy oscuro
          secundario: '#1E1E1E', // Fondo alterno o paneles
        },
        texto: {
          principal: '#FFFFFF', // Texto claro principal
          secundario: '#E0E0E0', // Texto menos intenso
          apagado: '#A0A0A0', // Texto deshabilitado o sutil
          gris: '#888888', // Alternativa de gris medio
        },
        interactivo: {
          azul: '#4A90E2', // Azul suave tipo Paldea
          verde: '#50C878', // Verde esmeralda controlado
        },
        acento: {
          rojo: '#FF4D4D', // Notificaciones o alertas
          amarillo: '#FFD700', // Énfasis o advertencias
        },
      },
    },
  },
  plugins: [],
};
