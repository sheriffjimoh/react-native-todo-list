import React from 'react';
import { useState } from 'react';
import {TextInput,View,TouchableOpacity,StyleSheet,Text} from 'react-native';




Inputtodo = props =>{

const [enteredGoal, setenteredGoal] = useState('');

const goalinputHandler = (enteredText) => {
    setenteredGoal(enteredText);
} 
    return (
        <View style={styles.formContainer}>
        <TextInput placeholder="Input goal"
         style={styles.input} 
         onChangeText={goalinputHandler}
         value={enteredGoal}
         clearButtonMode="always">

         </TextInput>
         <TouchableOpacity
         style={styles.button}
         onPress={props.onclickFire.bind(this, enteredGoal)} >
         <Text style={styles.buttontext}>Add</Text>
       </TouchableOpacity>
        {/* <Button title="Add"  onPress={addgoalHandler}/> */}

     </View>
    );
}



const styles = StyleSheet.create({


    formContainer: {
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      borderColor:"white",
      borderBottomWidth:1,
    },
    input:{
      width:"80%",
      padding:10,
    },
    button:{
      backgroundColor:"#ffff",
      padding:10,
      marginLeft:5,
      width:"20%",
      marginBottom:-1
     
    },
    buttontext:{
      color:"black",
      fontWeight:"bold",
      fontSize:20,
    },
  
  
   
  
  });

export default Inputtodo;