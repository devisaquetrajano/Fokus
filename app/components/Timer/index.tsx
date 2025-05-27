import { Text } from "react-native";
import { styles } from "./styles";

type props={
    totalSeconds: any
}

export function Timer({totalSeconds}: props) {

    const date= new Date(totalSeconds* 1000);
    const options = { minute: '2-digit', second: '2-digit' }
    return (
        <Text style={styles.timer}>{date.toLocaleTimeString('pt-br', options)}</Text>
    )
}