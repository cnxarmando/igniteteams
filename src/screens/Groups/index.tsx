import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'
import { Header } from '@/components/Header';
import { HighLight } from '@/components/HighLight';
import { GroupCard } from '@/components/GroupCard';
import { ListEmpty } from '@/components/ListEmpty';
import { Button } from '@/components/Button';

import { SafeAreaView } from 'react-native-safe-area-context';

export function Groups(props) {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation();

  function handleNewGroup() {
    console.log('oi')
    props.navigation.navigate('new')
  }

  return (
    <SafeAreaView style={styles.container}>
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
        contentContainerStyle={
          groups.length === 0 && { flex: 1}
        }
        ListEmptyComponent={() => <ListEmpty
          message="Crie uam turma para adicionar pessoas"
        />
      }
      />
      <Button
      title='Criar nova turma'
      type='PRIMARY'
      onPress={handleNewGroup}
      
      />
    </SafeAreaView>
  );
}
