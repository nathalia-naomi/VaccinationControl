import React, {useState} from 'react';
import {View, Text, Image, Button, TextInput} from 'react-native';

const NewVaccine = ({navigation}) => {
    const [titleText, setTitleText] = useState("Nova vacina");
    const [vaccine, setVaccine] = useState("");

    return (
        <View>
            <View>
                {/* back button */}
                <Button/>
                <Text>{titleText}</Text>
            </View>

            <View>
                {/* date picker */}
                <Text>Data de vacinação</Text>

                <TextInput
                    label="Vacina"
                    value={vaccine}
                    onChange={value => setVaccine(value)}
                />

                {/* radio button */}
                <Text>Dose</Text>

                {/* upload image / image picker */}
                <Text>Comprovante</Text>

                {/* date picker */}
                <Text>Próxima vacinação</Text>

                <Button
                    title="Salvar alterações"
                    onPress={saveChanges}
                />

            </View>
        </View>
    )
};

export default NewVaccine;
