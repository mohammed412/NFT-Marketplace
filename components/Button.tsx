import { Text, TouchableOpacity, View } from "react-native"
import { SHADOWS } from "../constants"

export const CircleButton = ({imgUrl, handlePress, ...props}: any) => {
    return (
        <TouchableOpacity className={props.className}
            style={{
                ...SHADOWS.light
            }}
        >
            <Text>Button</Text>
        </TouchableOpacity>
    )
}