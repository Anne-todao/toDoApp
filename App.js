import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App(){
  return(

    <View style={styles.container}>
      <Text style={styles.text}>tarefas</Text>
      <View style={styles.corVerm}></View>
      <View style={styles.corAzul}></View>
      <View style={styles.corVerd}></View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'row',
  gap:10
},
  corVerm:{
    width:50,
    height:50,
    backgroundColor:'red',
  },
  corAzul:{
    width:50,
    height:50,
    backgroundColor:'blue'
  },
  corVerd:{
    width:50,
    height:50,
    backgroundColor:'green'
  },
})