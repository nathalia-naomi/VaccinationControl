import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';

const UpcommingVaccines = ({navigation}) => {
    const [titleText, setTitleText] = useState("Próximas vacinas");

    return (
        <View>
            <View>
                {/* Hamburguer menu */}
                <Text>{titleText}</Text>
            </View>

            <View>
                {/* vacine list */}
            </View>

            <Button
                title="Nova Vacina"
                onPress={() => navigation.navigate("NewVaccine")}
            />
        </View>
    )
};

export default UpcommingVaccines;
