import  ConvertidorScreenDolar  from "./Screens/ConvertirVista";
import  ConvertidorScreenEuro  from "./Screens/ConvertirVistaEuro";

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export function NavegacionDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Dolares" component={ConvertidorScreenDolar} />
        <Drawer.Screen name="Euros" component={ConvertidorScreenEuro} />
      </Drawer.Navigator>
    );
  }