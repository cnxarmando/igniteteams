import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    nameIcon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleProps
}

export function ButtonIcon(props: Props) {
    const { nameIcon, type = "PRIMARY" } = props;
    let iconStyle 

    if( nameIcon === "add") {
        iconStyle = styles.colorGreen;        
    }else {
        iconStyle = styles.colorRed; 
    }
    
    return (
        <TouchableOpacity style={styles.container}>
            <MaterialIcons
            name={nameIcon}
            style={iconStyle}/>            
        </TouchableOpacity>
    )

}