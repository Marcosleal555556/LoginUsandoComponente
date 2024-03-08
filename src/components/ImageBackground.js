import { Text, View, StyleSheet, Button } from 'react-native';
import { styles } from '../styles/StyleSheet';
import LoginImage from '../components/LoginImage';

export default function ImageBackground() {

return (
<ImageBackground source={require('../assets/imagens/fundo.png')} style={styles.fundologin}>
<LoginImage/>
<LoginText/>
<LoginButton/>
</ImageBackground>
);
}