import { View } from 'react-native';
import { Theme } from '@/theme';

import { UsersThree } from 'phosphor-react-native';

import { styles } from './styles';
import { Header } from '@/components/Header';
import { HighLight } from '@/components/HighLight';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Filter } from '@/components/Filter';

export function Players() {
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

            <Filter
            title='Time A'
            
            />

            <Button
                title='Remover nova turma'
                type='SECONDARY'
            />

        </View>
    )
}