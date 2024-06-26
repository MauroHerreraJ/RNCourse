import { TextInput,View,Button,StyleSheet, Modal,Image } from "react-native";
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

      console.log(enteredGoalText);

    return (
   <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
     <Image 
      style={styles.image}
      source={require("../assets/images/goal.png")}
     />
      <TextInput 
      style={styles.textImput} 
      placeholder='Your course goal!' 
      onChangeText={goalInputHandler} 
      value={enteredGoalText} 
      /> 
    <View style={styles.buttonContainer}>

      <View style={styles.button}>
      <Button title='Add Goal' onPress={addGoalHandler} color="#5e0acc"/>     
      </View>   

      <View style={styles.button}>
        <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
      </View>

      </View> 

    </View>
    
  </Modal>
    );
}

export default GoalImput;

const styles= StyleSheet.create({

    inputContainer:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        padding:16,
        backgroundColor: "#311b6b",
    
      },

      image:{
        width:250,
        height:250,
        margin:20,
        
      },

      textImput:{
        borderWidth: 1,
        borderColor:"#e4d0ff",
        backgroundColor:"#e4d0ff",
        width:"100%",
        padding: 12,
        color:"#120438",
        borderRadius:6,
        
    
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:"row"

      },
      button:{
        width: 100,
        marginHorizontal: 8
      }

})