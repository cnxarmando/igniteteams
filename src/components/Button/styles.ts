import { StyleSheet } from "react-native";
import { Theme } from "@/theme";

export const styles = StyleSheet.create({
    primaryContainer: {
        minWidth: '100%',
        height: 60,        
        borderRadius: 6,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: Theme.COLORS.GREEN_700,
        marginTop: 20
    },
    secondaryContainer: {
        minWidth: '100%',
        height: 60,        
        borderRadius: 6,

        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Theme.COLORS.RED
    },
    text: {
        fontSize: Theme.FONT_SIZE.MD,
        fontFamily: Theme.FONT_FAMILY.BOLD,
        color: Theme.COLORS.WHITE,

    },
    button: {

    }
});