import { Text, View, StyleSheet, TextInput } from 'react-native';
import { styles } from '../styles/StyleSheet';
export default function SecondComponent() {

return (
<View style={styles.container}>
<TextInput
    placeholder='Digite Seu E-mail'
    inputMode={'text'}
   
    />

    <TextInput
    placeholder='Digite Sua Senha'
    inputMode={'text'}
    secureTextEntry={true}
    />
</View>
);
}