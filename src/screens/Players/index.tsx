import { View, FlatList, Text } from 'react-native';

import { styles } from './styles';
import { Header } from '@/components/Header';
import { HighLight } from '@/components/HighLight';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Filter } from '@/components/Filter';
import { useState } from 'react';
import { PlayerCard } from '@/components/PlayerCard';
import { ListEmpty } from '@/components/ListEmpty';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Players() {
    const [players, setPlayers] = useState(['Armando', 'Simon', 'Ana', 'Rodrigo', 'Mayk', 'Biro', 'Diego','Armando1', 'Simon1', 'Ana1', 'Rodrigo1', 'Mayk1', 'Biro1', 'Diego1'])

    return (
        <SafeAreaView style={styles.container}>
            <Header showBackButton />
            <View style={styles.content}>
                <HighLight
                    title='Igreja Viva'
                    subTitle='Times que cumprem o ide'
                />
            </View>
            <View style={styles.form}>
                <Input
                    message="Nome do pessoa"
                />
                <ButtonIcon
                    nameIcon='add'
                    type='SECONDARY'
                />
            </View>
            <View style={styles.headerList}>
                <FlatList
                    data={['Time A', 'Time B', 'Time C', 'Time D', 'Time E', 'Time F']}
                    keyExtractor={item => item}
                    renderItem={
                        ({ item }) => (
                            <Filter
                                title={item}

                            />
                        )
                    }
                    horizontal
                />
                <Text style={styles.numberOfPlayers}>
                    {players.length}
                </Text>
            </View>
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => {}}
                        />
                        )}
                ListEmptyComponent={() =>(
                    <ListEmpty
                    message='Nao ha pessoas neste time'
                    />
                    )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[
                    players.length === 0 ? { flex: 1 } : {paddingBottom: 100}
                ]}
            />
                <Button
                title='Remover turma'
                type='SECONDARY'
                />
        </SafeAreaView>
    )
}