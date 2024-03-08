import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground,} from 'react-native';
import Home from './src/pages/Home';
import { styles } from './src/styles/StyleSheet';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import About from './src/pages/About';

export default function App() {
return (
<View style={{flex: 1}}>

{/* Componente Login Com tudo que está */}

<Home />

<NavigationContainer> {/* Componente fornecido pelo React Navigation para envolver a navegação da aplicação. */}
      <Stack.Navigator > {/* Componente Navigator do navegador de pilha. initialRouteName define a rota inicial da navegação. */}
        <Stack.Screen name="Home" component={Home} /> {/* Define uma tela com o nome "Home" e associa o componente Home a ela. */}
        <Stack.Screen name="Sobre" component={About} /> {/* Define uma tela com o nome "Sobre" e associa o componente Sobre a ela. */}
      </Stack.Navigator>
    </NavigationContainer>
     
</View>

);
}



