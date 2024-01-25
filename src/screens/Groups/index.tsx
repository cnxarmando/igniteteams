import { Text, View } from 'react-native';
import { styles } from './styles'
import { Header } from '@/components/Header';

export function Groups() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Bem vindo ao seu app!</Text>
    </View>
  );
}
