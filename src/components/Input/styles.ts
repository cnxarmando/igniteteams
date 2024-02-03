import { StyleSheet } from "react-native";
import { Theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        minHeight: 56,
        maxHeight: 56,
        width: '100%',

        backgroundColor: Theme.COLORS.GRAY_700,
        color: Theme.COLORS.WHITE,
        fontFamily: Theme.FONT_FAMILY.REGULAR,
        fontSize: Theme.FONT_SIZE.MD,
        
        borderRadius: 6,
        padding: 16,
    },
});