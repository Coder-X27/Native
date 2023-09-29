import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const FormCreation = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [details, viewdetails] = useState(false);
  return (
    <>
      <TextInput
        placeholder="Enter your name"
        style={style.inputfield}
        value={name}
        onChangeText={e => setname(e)}
      />
      <TextInput
        placeholder="Enter your Password"
        secureTextEntry={true}
        style={style.inputfield}
        value={password}
        onChangeText={e => setpassword(e)}
      />
      <TextInput
        placeholder="Enter your Email"
        style={style.inputfield}
        value={email}
        onChangeText={e => setemail(e)}
      />
      <View style={[style.mar, style.text]}>
        <Button
          color={'green'}
          title="View Details"
          onPress={() => viewdetails(true)}
        />
        <Button title="Clear Details" onPress={() => viewdetails(false)} />
      </View>
      <View>
        {details ? (
          <View>
            <Text style={style.text2}>Your name is : {name}</Text>
            <Text style={style.text2}>Your email is : {email}</Text>
            <Text style={style.text2}>Your password is : {password}</Text>
          </View>
        ) : null}
      </View>
    </>
  );
};
const style = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  text2: {
    fontSize: 15,
  },
  inputfield: {
    borderWidth: 4,
    borderColor: 'black',
    padding: 15,
    margin: 10,
  },
  mar: {
    marginBottom: 5,
  },
});

export default FormCreation;
