import { StyleSheet } from "react-native";
import { Theme } from "@/theme";

export const styles = StyleSheet.create({
    container:{
        width: 56,
        height: 56,
    
        justifyContent: "center",
        alignItems: "center",
        
        marginLeft: 12
    },
    colorGreen: {
        fontSize:24,
        color: Theme.COLORS.GREEN_700,
    },
    colorRed: {   
        fontSize:24,     
        color: Theme.COLORS.RED,
    },
});