import { Stack } from "expo-router";


const backgroundColor = '#021123'
export default function layout(){
    return(
        <Stack screenOptions={{
            headerShown: false,
            contentStyle: {backgroundColor}
        }}/>
    )
}