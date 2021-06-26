//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Todoitems from './components/Todoitems';
import Inputtodo from './components/Inputtodo';

export default function App() {
  const [outputText, setoutputText] = useState("Welcome to my  first React native mobile app");
  const [courseGoals, setCourseGoals] = useState([]);

  
  const addgoalHandler = enteredtext => {
    setCourseGoals( currentGoals => [...currentGoals, enteredtext]);
  
  }



  return (
    
    <View >
      {/* Header bar */}
       <View style={styles.headerContainer}>
        <Text  style={styles.headerText}>Todo Items</Text>
      </View>

      {/* Todo List */}
      <View style={styles.mainContainer}>
       {/* form input */}
       <Inputtodo  onclickFire={addgoalHandler}/>
       <ScrollView   showsVerticalScrollIndicator={false}>
        
       <View style={styles.listedGoalsContainer}>
         {courseGoals.map((goal , index) => <Todoitems title={goal} key={index}/> )}
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


  listedGoalsContainer:{
    marginTop:40,
  },

});
