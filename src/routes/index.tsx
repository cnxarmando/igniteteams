import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { Theme } from "@/theme";

export function Routes() {
    return (
        <View style={{ 
            flex:1,
            backgroundColor: Theme.COLORS.GRAY_600
         }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}