import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Initial = ({ navigation }) => {
  const [titleText] = useState('MyHealth');
  const bodyText = 'Controle as suas vacinas e fique seguro';
  const errorMessage = 'E-mail e/ou senha inválidos.';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [error] = useState(false);

  const handleSubmit = () => {
    if (error) setLoginError({ errorMessage });
    else navigation.navigate('Home');
  };

  return (
    <View>
      <View>
        {/*<Image source="src/images/logo.svg" />*/}
        <Text>{titleText}</Text>
      </View>
      <Text>{bodyText}</Text>

      <View>
        {/*user and password inputs*/}
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
        {/* error message */}
        {loginError.length > 0 && <Text>{loginError}</Text>}

        {/* TO DO: login verification */}
        <Button title="Entrar" onPress={handleSubmit} />
      </View>

      <Button title="Criar minha conta" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Esqueci minha senha" onPress={() => navigation.navigate('RecoverPassword')} />

      <Button title="EditVaccine" onPress={() => navigation.navigate('EditVaccine')} />
      <Button title="NewVaccine" onPress={() => navigation.navigate('NewVaccine')} />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="UpcomingVaccines" onPress={() => navigation.navigate('UpcomingVaccines')} />
    </View>
  );
};

export default Initial;
