import { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles'
import { Header } from '@/components/Header';
import { HighLight } from '@/components/HighLight';
import { GroupCard } from '@/components/GroupCard';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <View style={styles.container}>
      <Header />
      <HighLight
        title='Turmas'
        subTitle='Jogue com sua turma'
      />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
          )
        }
      />
    </View>
  );
}
