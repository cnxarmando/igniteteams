import { StyleSheet } from "react-native";
import { Theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.COLORS.GRAY_600,
        padding: 24
    },
    content: {
        flex: 0,
        alignItems: 'center',
    }, 
    form: {
        width: "100%",
        backgroundColor: Theme.COLORS.GRAY_700,

        flexDirection: 'row',

        marginBottom: 20,
        justifyContent: 'center',
        
        borderRadius: 6,
    },
    headerList: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',

        marginTop: 32,
        marginEnd: 12,
    },
    numberOfPlayers: {
        color: Theme.COLORS.GRAY_200,
        fontFamily: Theme.FONT_FAMILY.BOLD,
        fontSize: Theme.FONT_SIZE.SM,
    }
});