import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    title: string
    type?: ButtonTypeStyleProps
    onPress?: () => void;
}

export function Button( props: Props) {
    const { type = 'PRIMARY', title } = props;
    
    return (
        <TouchableOpacity style={type === 'PRIMARY' ? styles.primaryContainer : styles.secondaryContainer}
        onPress={props.onPress}
        >
            
                <Text style={styles.text}>
                    {title}
                </Text>
            
        </TouchableOpacity>
    )

}