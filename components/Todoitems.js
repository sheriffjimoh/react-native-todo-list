import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
 

Todoitems = props =>{
    return(
         <View style={styles.listedGoals} key={props.keyValue}>
         <Text style={styles.listtext}  >{props.title}</Text></View>
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