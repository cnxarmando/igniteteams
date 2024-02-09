import { View, FlatList, Text } from 'react-native';

import { styles } from './styles';
import { useState } from 'react';

type Props = {
    name: string
    onRemove: () => void
};


export function PlayerCard({name}: Props) {
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>
                {name}
            </Text>
       
        </View>
    )
}