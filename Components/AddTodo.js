import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const AddTodo = ({ onsubmitHandler }) => {
  const [input, setInput] = useState("");
  const changeHandler = (val) => {
    setInput(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        // same as (val) => changeHandler(val)
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => {
          onsubmitHandler(input);
        }}
        title="add todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
