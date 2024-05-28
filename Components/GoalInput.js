import { TextInput,View,Button,StyleSheet } from "react-native";
import { useState } from "react";

function GoalImput(props) {
    const [enteredGoalText,setEnteredGoalText] =useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
      }

    return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textImput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText} /> 
      <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>

    );
}

export default GoalImput;

const styles= StyleSheet.create({

    inputContainer:{
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        marginBottom:16,
        borderBottomWidth:1,
        borderBottomColor:"#cccccc"
    
      },
      textImput:{
        borderWidth: 1,
        borderColor:"#cccccc",
        width:"70%",
        marginRight:8,
        padding: 8,
    
      }

})