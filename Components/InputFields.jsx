import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput} from 'react-native';

const InputFields = () => {
  const [name, setname] = useState('');
  return (
    <>
      <Text style={style.text}>{name}</Text>
      <TextInput
        placeholder="Enter your name"
        style={style.inputfield}
        value={name}
        onChangeText={e => setname(e)}
      />
      <Button title='Click here' onPress={()=>setname("")}/>
    </>
  );
};
const style = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  inputfield: {
    borderWidth: 4,
    borderColor: 'black',
    padding: 15,
    margin: 10,
  },
});

export default InputFields;
