import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

type props={
    onPress: any,
    title: string,
    icon: any;
}

export function FokusButton({onPress, title, icon}: props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {icon}
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}