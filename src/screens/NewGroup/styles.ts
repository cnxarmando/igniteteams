import { StyleSheet } from "react-native";
import { Theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.COLORS.GRAY_600,
        padding: 24
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});