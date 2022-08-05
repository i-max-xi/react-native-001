import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [name, setName] = useState('Shaun');
  const [age, setAge] = useState('30');

 
  return (
    <View style={styles.container}>
     <Text>His name is {name} and his age is {age}</Text>
     <Text>Enter name</Text>
     <TextInput
      style={styles.input}
      multilne
      placeholder='e.g. John Doe'
      onChange={(val) => setName(val)} />
    <TextInput
      style={styles.input}
      keyboardType = 'numeric'
      onChange={(val) => setAge(val)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,

  }
});
