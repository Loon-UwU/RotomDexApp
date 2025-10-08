import { View } from 'react-native';
import { PokedexService } from '../../../Services/hooks/PokedexServices';
import { CartList } from './HomeComponentes/CartList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function HomeMain() {
  const { visiblePokedex, loadMore, loading } = PokedexService();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}
      className=""
    >
      <CartList data={visiblePokedex} loadMore={loadMore} loading={loading} />
    </View>
  );
}
