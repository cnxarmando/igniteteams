import { View} from 'react-native';
import { Theme } from '@/theme';

import { UsersThree } from 'phosphor-react-native';

import { styles } from './styles';
import { Header } from '@/components/Header';
import { HighLight } from '@/components/HighLight';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {
    const navigattion = useNavigation();

    function handleNew() {
        navigattion.navigate('players')
    }
    return (
        <View style={styles.container}>
            <Header showBackButton />
            <View style={styles.content}>                
                    <UsersThree  size={52} color={Theme.COLORS.GREEN_500}/>   
                    <HighLight
                        title='Nova Turma'
                        subTitle='Crie a turma para adicionar participantes'
                    />           
            </View>

            <Input
            message="Nova Turma"
                
            />            
            <Button
                title='Criar nova turma'
                onPress={handleNew}
            />

        </View>
    )
}