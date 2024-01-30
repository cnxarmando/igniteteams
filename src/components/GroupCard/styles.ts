import { Theme } from '@/theme';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        height: 90,

        backgroundColor: Theme.COLORS.GRAY_500,
        borderRadius: 10,
        marginBottom: 10,
    },
    content: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',

        padding: 24,
        marginBottom: 12

    },
    title: {
        fontSize: Theme.FONT_SIZE.MD,
        color: Theme.COLORS.GRAY_200,
        fontFamily: Theme.FONT_FAMILY.REGULAR,
        paddingLeft: 16,

    },
    
})

console.log(windowWidth)