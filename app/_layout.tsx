import Task from "@/components/Task"
import { colors } from "@/Constants/colors"
import { useState } from "react"
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import logo from "../assets/images/check.png"

export default function RootLayout() {
  const initialTasks = [
    {id: 1, completed: true, text: "fazer café"},
    {id: 2, completed: false, text: "Estudar React Native"},
    {id: 3, completed: false, text: "Academia"},
  ]

  const [tasks, setTasks] = useState(initialTasks)
  const [text, setText] = useState("")

  const addTask = () =>{
    const newTask = {id: tasks.length + 1, completed: false, text}
    setTasks([...tasks, newTask])
    setText("")
  }
  
  return (

    <View style={style.mainContainer}>
      <view style={style.rowContainer}>
        <Image source={logo} style={style.image}/>
        <Text style={style.title}>Minhas Tarefas</Text>
      </view>
      <view style={style.rowContainer}>
        <TextInput  value={text} onChangeText={setText} style={style.input}/>
        <Pressable 
        onPress={addTask}
        style = {({pressed}) => [style.button, {backgroundColor: pressed ? "blue" : colors.primary}]}
        >
          <text style={style.buttonText}>+</text>
        </Pressable>
      </view>
      <view>
        <FlatList 
        data={tasks} 
        renderItem={({item}) => <Task text={(item.text)} initialcompleted={item.completed}/>} 
        />
      </view>
    </View> 
  )
}

const style = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  },
  title: {
    fontSize: 30,
    fontFamily: "Calibri",
    fontWeight: 600,
    color: colors.primary
  },
  input:{
    height: 40,
    paddingHorizontal: 16,
    borderColor:"gray",
    borderWidth: 1,
    borderRadius:20,
    flexGrow:1,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius:20,
    backgroundColor: colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  mainContainer: {
    margin: 20
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  }
})
