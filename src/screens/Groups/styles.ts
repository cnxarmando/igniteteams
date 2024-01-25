import { StyleSheet } from "react-native";
import { Theme } from '@theme/index' 


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Theme.COLORS.GRAY_600,
      alignItems: 'center',
      // justifyContent: 'center',
      padding: 24
    },
    title: {
      color: Theme.COLORS.GRAY_100,
    }
  });


