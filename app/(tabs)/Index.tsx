import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeMain } from '../../components/Views/Home/HomeMain';

export default function Index() {
  return (
    <SafeAreaProvider>
      <HomeMain />
    </SafeAreaProvider>
  );
}
