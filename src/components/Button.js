import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor: 'blue',
        padding: 10,
    },
    button: {
      paddingHorizontal: 20,
    },
  });

const Button = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>

        </TouchableOpacity>
    </View>
  )
}

export default Button