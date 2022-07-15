import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
<<<<<<< HEAD
import Perfil from '../pages/Perfil'
=======
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
>>>>>>> 871958a27f5317db086392cd55b2ede269e5e33c

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
<<<<<<< HEAD
                name='Perfil'
                component={Perfil}
=======
                name="SignUp"
                component={SignUp}
                options={{ headerShown : false}}
            />

            <Stack.Screen
                name="Home"
                component={Home}
>>>>>>> 871958a27f5317db086392cd55b2ede269e5e33c
                options={{ headerShown : false}}
            />
        </Stack.Navigator>
    )
}