import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-web';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Shaun', key: '1'},
    {name: 'Yoshi', key: '2'},
    {name: 'Marid', key: '3'},
    {name: 'luigi', key: '4'},
    {name: 'peach', key: '5'},
    {name: 'toad', key: '6'},
    {name: 'browser', key: '7'},

  ])
 
  return (
    <View style={styles.container}>
      <FlatList
      numColumns={2}
      data={people}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.name}</Text>
      )} />

      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.lists}>{item.name}</Text>
            </View>
          )
      })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item : {
    padding: 10,
    backgroundColor: 'pink',
    margin: 2,
    marginHorizontal: 10,
  }
});
