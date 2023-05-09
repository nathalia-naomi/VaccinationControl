import React, {useState} from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';

const RecoverPassword = ({navigation}) => {
    const [email, setEmail] = useState("");

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
                    onChangeText={value => setEmail(value)}
                />
                <Button
                    title="Criar minha conta"
                    onPress={recover}
                />
            </View>
        </View>
    )
};

export default RecoverPassword;
