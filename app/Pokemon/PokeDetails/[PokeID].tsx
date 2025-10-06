import { useLocalSearchParams } from 'expo-router';
import { DetailsMain } from '../../../components/Views/Home/DetailsMain';
import { View, Text } from 'react-native';

export default function PokeDetail() {
  const { PokeID } = useLocalSearchParams();

  return <DetailsMain PokeID={String(PokeID)}></DetailsMain>;
}
