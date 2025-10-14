import { View } from 'react-native';
import { PokedexService } from '../../../Services/hooks/PokedexServices';
import { CartList } from './HomeComponentes/CartList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

export function HomeMain() {
  const { visiblePokedex, loadMore, loading } = PokedexService();
  const insets = useSafeAreaInsets();

  if (loading) {
    return (
      <View className="flex h-full items-center justify-center">
        <LottieView
          source={require('../../../assets/PokeballLoad.json')}
          autoPlay
          loop
          style={{ width: 50, height: 50 }}
        ></LottieView>
      </View>
    );
  }
  return (
    <View
      style={{ marginBottom: insets.bottom, marginTop: insets.top }}
      className=" bg-white dark:bg-fondo-base"
    >
      <CartList data={visiblePokedex} loadMore={loadMore} loading={loading} />
    </View>
  );
}
