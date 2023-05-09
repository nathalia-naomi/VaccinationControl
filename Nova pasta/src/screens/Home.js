import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';

const Home = ({navigation}) => {
    const [titleText, setTitleText] = useState("Minhas vacinas");
    
    return (
        <View>
            <View>
                {/* Hamburguer menu */}
                <Text>{titleText}</Text>
            </View>

            {/* search bar */}

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

export default Home;
