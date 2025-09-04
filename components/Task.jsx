import { colors } from "@/Constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

function Task({text, initialcompleted, deleteTask}){
    const [completed, setCompleted] = useState(initialcompleted)
    const position = useSharedValue(0);
    const flingGesture = Gesture.Fling()
        .direction(Directions.RIGHT)
        .onStart((e) => {
        position.value = withTiming(position.value + 400, { duration: 300 });
        deleteTask()});
            
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
      }));

    return(
        <GestureDetector gesture={flingGesture}>
            <Animated.View style={[styles.rowContainer,  animatedStyle]}>
                <Pressable onPress={() => setCompleted(!completed)}>
                    <Ionicons 
                    name="checkmark-circle"
                    size={32}
                    color={completed ? colors.primary : "gray"}/>
                </Pressable>
                <Text>{text}</Text>
            </Animated.View>
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        gap: 10,
        marginBottom: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
        backgroundColor: "#FFFFFF",
        padding: 10,
    },
});

export default Task;