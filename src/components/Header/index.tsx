import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import logopng from '@assets/logo.png';
import { CaretLeft } from "phosphor-react-native";
import { Theme } from "@/theme";

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

    return (
        <View style={styles.container}>
            {
                showBackButton &&
                <TouchableOpacity style={styles.button}>
                    <CaretLeft color={Theme.COLORS.WHITE} size={32} />
                </TouchableOpacity>
            }
            <Image style={styles.logo} source={logopng} />
        </View>
    )
}
