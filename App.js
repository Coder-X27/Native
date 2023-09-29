import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import SampleComponent from './Components/SampleComponent';
import InputFields from './Components/InputFields';
import FormCreation from './Components/FormCreation';

function App(){
  const json=[
    {
      id:1,
      name:'karan',
      salary:20000,
    }
  ]
  const [create, setcreate] = useState("")
  function warner(){
    create==""?setcreate("Hi"):setcreate("")
    
  }

  return (
    <>
      <View>
        {/* <Text style={{fontSize:30}}>hi</Text>
        <Text style={{fontSize:30}}>This is the sample Text</Text>
        <Button title='Press here' onPress={warner}></Button>
        <Text style={{fontSize:30}}>{create}</Text>
        <SampleComponent/> */}
        {/* <InputFields/> */}
        <FormCreation/>
      </View>
    </>
  );
}

export default App;
