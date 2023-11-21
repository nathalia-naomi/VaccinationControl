import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RecoverPassword = () => {
  const [titleText] = useState('MyHealth');
  const [email, setEmail] = useState('');

  const recover = () => {};

  return (
    <View>
      <View>
        {/*<Image source="src/images/logo.svg" />*/}
        <Text>{titleText}</Text>
      </View>
      <View>
        <TextInput
          // setFocus={focus} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          label="E-mail"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Button title="Recurepar senha" onPress={recover} />
      </View>
    </View>
  );
};

export default RecoverPassword;
