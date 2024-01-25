import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 32,
        marginBottom: 32,
    },
    title: {
        textAlign: "center",
        fontSize: Theme.FONT_SIZE.XL,
        fontFamily: Theme.FONT_FAMILY.BOLD,
        color: Theme.COLORS.WHITE,
    },
    subTitle: {
        textAlign: "center",
        fontSize: Theme.FONT_SIZE.MD,
        fontFamily: Theme.FONT_FAMILY.REGULAR,
        color: Theme.COLORS.GRAY_300,
    }

});