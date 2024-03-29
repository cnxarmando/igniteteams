import { TextInput } from 'react-native';
import { styles } from "./styles";
import { Theme } from '@/theme';

type Props = {
  message: string
  onChangeText?: (value: string) => void
};


export function Input({message, ...rest}:Props){
    return (
        <TextInput 
          style={styles.container}
          placeholder={message}
          placeholderTextColor={Theme.COLORS.GRAY_300}
          autoCorrect={false}
          {...rest}
          >         
        </TextInput>
    )

}