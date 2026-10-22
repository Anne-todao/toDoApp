import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.atv1}>
      <View style={styles.vermelho}></View>
      <View style={styles.azul}></View>
      <View style={styles.verde}></View>
      </View>
      <Text style={styles.titulo}>Minhas Tarefas</Text>
      
      <View style={styles.inputContainer}>

        <TextInput 
          style={styles.input} 
          placeholder="Digite a anotação..." 
          placeholderTextColor="#999"
        />


        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80, 
    paddingHorizontal: 20, 
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30, 
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  input: {
    flex: 1, 
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8, 
    fontSize: 16,
    marginRight: 10, 
  },
  botao: {
    width: 56,
    height: 56,
    backgroundColor: '#4CAF50',
    borderRadius: 28, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  vermelho:{
    backgroundColor:'red',
    height:20,
    width:20,
  },
  azul:{
    backgroundColor:'blue',
    height:20,
    width:20,
  },
  verde:{
    backgroundColor:'green',
    height:20,
    width:20,
  },
  atv1:{
    alignItems:'center',
    flexDirection: 'row', 
    gap:7,
  }
});