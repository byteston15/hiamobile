import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 8,
    },
    input: {
      paddingHorizontal: 20,
      margin: 0,
    },
  });

const Input = ({}) => {
    const [text,setText] = useState('hola');
  return (
    <View style={styles.container}>
        <TextInput value={text} onChangeText={setText} style={styles.input}>
        
        </TextInput>
    </View>
  )
}

export default Input