import { Text, View, StyleSheet, TextInput } from 'react-native';
import { styles } from '../styles/StyleSheet';
export default function SecondComponent() {

return (
<View style={styles.container}>
<TextInput
    placeholder='Digite Seu E-mail'
    inputMode={'text'}
    style={styles.email}
    />

    <TextInput
    placeholder='Digite Sua Senha'
    inputMode={'text'}
    style={styles.senha}
    secureTextEntry={true}
    />
</View>
);
}