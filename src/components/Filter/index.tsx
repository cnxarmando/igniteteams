import { Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import { styles } from "./styles";


type FilterStyleProps = {
    title: string
}

export function Filter({ title, ...rest }: FilterStyleProps) {

    const [buttonClicked, setButtonClicked] = useState(false);

    const handlePress = () => {
        setButtonClicked(!buttonClicked);
    };

    return (
        <TouchableOpacity
        onPress={handlePress}
            style={buttonClicked === true ? styles.containerBorder : styles.container}
        >
            <Text
                style={styles.title} >
                {title.toUpperCase()}
            </Text>
        </TouchableOpacity>
    )
}