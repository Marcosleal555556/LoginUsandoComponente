import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground,} from 'react-native';
import Login from './src/pages/Login';
import { styles } from './src/styles/StyleSheet';

export default function App() {
return (
<View style={styles.container}>

<Login />


     
</View>

);
}



