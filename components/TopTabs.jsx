import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import ConvertidorScreenDolar from './Screens/ConvertirVista';
import ConvertidorScreenEuro from './Screens/ConvertirVistaEuro';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return <Tab.Navigator style={{ marginTop: 40 }} screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let nombreIcono

            switch (route.name) {
                case 'dolares':
                    nombreIcono = focused ? "dollar" : "dollar"
                    break;

                case 'euros':
                    nombreIcono = focused ? "euro" : "euro"
                    break;

                default:
                    nombreIcono = focused ? "gears" : "gears"
                    break;
            }
            return <Icon name={nombreIcono} size={size} color={color} />
        }
    })} >
        <Tab.Screen name="dolares" component={ConvertidorScreenDolar} />
        <Tab.Screen name="euros" component={ConvertidorScreenEuro} />
    </Tab.Navigator>
}