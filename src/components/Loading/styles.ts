
import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
Theme

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: Theme.COLORS.GRAY_600, 

    },
    text: {
        color: Theme.COLORS.GRAY_100
    },
   
});
