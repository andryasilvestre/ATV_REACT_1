import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Linking} from 'react-native';
import TelaSec from "./telaSec";

// import * as Linking from 'expo-linking';
// import { A } from '@expo/html-elements';

//em breve vou tentar conectar com a outra api... então o código vai ser atualizado.


export default function App() {
  return (
    <View style={styles.container}>
      <Text> Para ver a moça mais linda do mundo...</Text>
      <Text> Clique aqui...</Text>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("/assets/img/maggie.png")}></TouchableOpacity>
      <Text>Criado por Ândrya Silvestre</Text>
      <Text>HTML é muito superior.</Text>
      <StatusBar style="auto" />
    </View>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5ABFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#fff',
    height: '30px',
    width: '30px'
  }
});
