import { Text, View, StyleSheet, Button } from 'react-native';
import { styles } from '../styles/StyleSheet';
export default function SecondComponent() {

return (
<View style={styles.container}>
<Button
     title='Efetuar Login'
     onPress={() => {
       alert('Login Efetuado');
     }}
     color='red'
     
    />
</View>
);
}