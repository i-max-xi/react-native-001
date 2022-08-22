import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import ToDoItem from "./Components/ToDoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "build an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (identifier) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != identifier));
  };

  const submitHandler = (input) => {
    if (input.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: input, key: Math.random.toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Input must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />

        <View style={styles.content}>
          {/* to do form */}
          <AddTodo onsubmitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem onPressHandler={pressHandler} items={item} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
