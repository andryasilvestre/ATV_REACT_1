import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, img } from 'react-native';
// import * as Linking from 'expo-linking';
// import { A } from '@expo/html-elements';

//em breve vou tentar conectar com a outra api... então o código vai ser atualizado.


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Criado por Ândrya Silvestre</Text>
      <Text>Clique na tela</Text>
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
});
