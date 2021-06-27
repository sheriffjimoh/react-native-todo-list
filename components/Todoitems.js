import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native';
 

Todoitems = props =>{
    return(
        <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
         <View style={styles.listedGoals} key={props.id}>
         <Text style={styles.listtext}  >{props.title}</Text></View>
         </TouchableOpacity>
     )
};


const styles = StyleSheet.create({

    listtext:{
        fontWeight:"bold",
      },
    
      listedGoals:{
        backgroundColor:"#ffff",
        padding:15,
        marginBottom:10,
        fontFamily: "Cochin",
        fontWeight:"bold"
      }
});
export default Todoitems;