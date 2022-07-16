import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Perfil from '../pages/Perfil'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>  
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown : false}}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown : false}}
            />

            <Stack.Screen
                name='Perfil'
                component={Perfil}
                options={{ headerShown : false}}
            />

            <Stack.Screen
                name='SignUp'
                component={SignUp}
                options={{ headerShown : false}}
            />

            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown : false}}
            />
        </Stack.Navigator>
    )
}