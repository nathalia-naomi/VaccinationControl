import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const SignUp = () => {
  const [titleText] = useState('Nova Conta');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [passwordError] = useState('');
  const errorMessage = 'Senha não confere!';

  const signUp = () => {};
  const handleError = () => {
    if (error) setError(errorMessage);
  };

  return (
    <View>
      <View>
        {/* back button */}
        <Button />
        <Text>{titleText}</Text>
      </View>

      <View>
        <TextInput label="Nome completo" value={name} onChange={(value) => setName(value)} />

        {/* radio button */}
        <Text>Sexo</Text>

        {/* date picker */}
        <Text>Data de nascimento</Text>

        <TextInput
          // setFocus={focus} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          label="E-mail"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          // setFocus={focus} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          label="Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
        <TextInput
          // setFocus={focus} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          label="Repetir senha"
          value={confirmPassword}
          secureTextEntry={true}
          onChangeText={handleError}
        />
        {/* error message */}
        {passwordError.length > 0 && <Text>{passwordError}</Text>}

        <Button title="Cadastrar" onPress={signUp} />
      </View>
    </View>
  );
};

export default SignUp;
