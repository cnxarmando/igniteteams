import { Text, View } from 'react-native';
import { styles } from './styles'
import { Header } from '@/components/Header';
import { HighLight } from '@/components/HighLight';

export function Groups() {
  return (
    <View style={styles.container}>
      <Header />
      <HighLight
        title='Turmas'
        subTitle='Jogue com sua turma'
      />
      
    </View>
  );
}
