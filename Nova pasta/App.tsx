import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Initial from "./src/screens/Initial";
import Home from "./src/screens/Home";
import SignUp from "./src/screens/SignUp";
import RecoverPassword from "./src/screens/RecoverPassword";
import NewVaccine from "./src/screens/NewVaccine";
import EditVaccine from "./src/screens/EditVaccine";
import UpcomingVaccines from "./src/screens/UpcomingVaccines";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inital" component={Initial} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
                <Stack.Screen name="NewVaccine" component={NewVaccine} />
                <Stack.Screen name="EditVaccine" component={EditVaccine} />
                <Stack.Screen name="UpcomingVaccines" component={UpcomingVaccines} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;