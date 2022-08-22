import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ToDoItem = ({ items, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={ () => onPressHandler(items.key)}>
      <Text style={styles.item}>{items.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
});

export default ToDoItem;
