import { StyleSheet } from "react-native";
import { Theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    message: {
        textAlign: 'center',

        fontSize: Theme.FONT_SIZE.SM,
        fontFamily: Theme.FONT_FAMILY.REGULAR,
        color: Theme.COLORS.GRAY_300,
    }
});