import { ImageBackground } from 'react-native';
import { styles } from '../styles/StyleSheet';
import LoginImage from '../components/LoginImage';
import LoginText from '../components/LoginText';
import LoginInput from '../components/LoginInput';
import LoginButton from '../components/LoginButton';




export default function ImageBackground() {

return (
<ImageBackground source={require('../assets/imagens/fundo.png')} style={styles.fundologin}>
<LoginImage/>
<LoginText/>
<LoginInput />
<LoginButton/>
</ImageBackground>
);
}