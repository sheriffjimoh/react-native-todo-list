//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [outputText, setoutputText] = useState("Welcome to my  first React native mobile app");
  const [enteredGoal, setenteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalinputHandler = (enteredText) => {
         setenteredGoal(enteredText);
  } 
  const addgoalHandler = () => {
    setCourseGoals( currentGoals => [...currentGoals, enteredGoal]);
  
  }



  return (
    
    <View >
      {/* Header bar */}
       <View style={styles.headerContainer}>
        <Text  style={styles.headerText}>Todo Items</Text>
      </View>

      {/* Todo List */}
      <View style={styles.mainContainer}>
       <View style={styles.formContainer}>
         <TextInput placeholder="Input Todo"
          style={styles.input} 
          onChangeText={goalinputHandler}
          value={enteredGoal}
          clearButtonMode="always"
          >

          </TextInput>
          <TouchableOpacity
          style={styles.button}
            onPress={addgoalHandler}
        >
            <Text style={styles.buttontext}>Add</Text>
        </TouchableOpacity>
         {/* <Button title="Add"  onPress={addgoalHandler}/> */}

      </View>
       <ScrollView   showsVerticalScrollIndicator={false}>
        
       <View style={styles.listedGoalsContainer}>
         {courseGoals.map((goal , index) =><View style={styles.listedGoals} key={index}><Text style={styles.listtext}>{goal}</Text></View> )}
       </View>
       </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({


  // header

  headerContainer:{
    paddingTop:20,
    backgroundColor:"#fff",
    textAlign:"center",
    justifyContent:"center"
  },
  headerText:{
    padding:20,
    textAlign:"center",
    fontWeight:"bold",
    fontSize:25
  },
  mainContainer: {
    padding:30,
    backgroundColor:"#7fffd4",
  
  },
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

  listtext:{
    fontWeight:"bold",
  },

  listedGoalsContainer:{
    marginTop:40,
  },
  listedGoals:{
    backgroundColor:"#ffff",
    padding:15,
    marginBottom:10,
    fontFamily: "Cochin",
    fontWeight:"bold"
  }
});
