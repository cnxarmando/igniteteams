import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        marginRight: 12,

        height: 38,
        width: 70,

        alignContent: 'center',
        justifyContent: 'center',
    },
    containerBorder: {
        borderColor: Theme.COLORS.GREEN_700,
        borderWidth: 1,

        borderRadius: 4,
        marginRight: 12,

        height: 38,
        width: 70,

        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: Theme.FONT_FAMILY.BOLD,
        fontSize: Theme.FONT_SIZE.SM,
        color: Theme.COLORS.WHITE       
    },
})