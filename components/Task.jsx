import { colors } from "@/Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Task({text, initialcompleted}){
    const [completed, setCompleted] = useState(initialcompleted)

    return(
        <View style={styles.rowContainer}>
            <Pressable onPress={() => setCompleted(!completed)}>
                <Ionicons 
                name="checkmark-circle"
                size={32}
                color={completed ? colors.primary : "gray"}/>
            </Pressable>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        gap: 10,
        marginBottom: 10,
    },
});

export default Task;