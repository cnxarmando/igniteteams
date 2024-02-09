import { View, FlatList, Text } from 'react-native';

import { styles } from './styles';
import { Header } from '@/components/Header';
import { HighLight } from '@/components/HighLight';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Filter } from '@/components/Filter';
import { useState } from 'react';

export function Players() {
    const [ Players, setPlayers ] = useState([])

    return (
        <View style={styles.container}>
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
                    {Players.length}
                </Text>
            </View>
        </View>
    )
}