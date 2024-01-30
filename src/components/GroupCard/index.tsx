import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { UsersThree } from "phosphor-react-native";
import { styles } from "@components/GroupCard/styles";
import { Theme } from "@/theme";

type Props = TouchableOpacityProps &{ //TouchableOpacityProps da acesso as funções de um botão
    title: string;
}

export function GroupCard({title, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.content}>
                <UsersThree size={32} weight="fill" color={Theme.COLORS.GREEN_500} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}