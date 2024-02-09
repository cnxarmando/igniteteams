import { StyleSheet } from "react-native";
import { Theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Theme.COLORS.GRAY_600,
        padding: 24
    },
    title: {
        color: Theme.COLORS.GRAY_200,
        fontFamily: Theme.FONT_FAMILY.BOLD,
        fontSize: Theme.FONT_SIZE.SM,
    }, 
});