import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Initial from './screens/Initial';
import Home from './screens/Home';
import NewVaccine from './screens/NewVaccine';
import EditVaccine from './screens/EditVaccine';
import UpcomingVaccines from './screens/UpcomingVaccines';
import SignUp from './screens/SignUp';
import RecoverPassword from './screens/RecoverPassword';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Initial" component={Initial} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="NewVaccine" component={NewVaccine} />
                <Stack.Screen name="EditVaccine" component={EditVaccine} />
                <Stack.Screen name="UpcomingVaccines" component={UpcomingVaccines} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}