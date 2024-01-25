import { Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native'; // Mostra a tela carregando

import { styles } from './styles'
import { Theme } from '@/theme';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={90} color={Theme.COLORS.GREEN_700}/>
    </View>
  );
}
