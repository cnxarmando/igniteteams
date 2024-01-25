import { View, Image } from "react-native";
import { styles } from "./styles";
import  logopng  from '@assets/logo.png';

export function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logopng}/>
        </View>
    )
}
        // <View style={styles.container}>
        //     <Image source='logopng'/>
        // <View/>