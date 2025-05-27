import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";


type props={
    active: boolean,
    onPress: any,
    display: string,
}
export const ActionButton = ({active, onPress, display}: props)=> {
    return (
        <TouchableOpacity
            style={active ? styles.contextButtonTextActive : null}
            onPress={onPress}>
            <Text style={styles.contextButtonText}>{display}</Text>
        </TouchableOpacity>
    )
}