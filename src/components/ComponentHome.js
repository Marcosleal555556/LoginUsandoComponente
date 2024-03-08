import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../styles/StyleSheet';


const Fundo = {
  uri: 'https://img.freepik.com/fotos-gratis/fundo-preto-abstrato-da-grade-digital_53876-97647.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709769600&semt=ais',
}

export default function Home() {

return (
  
<View>
<ImageBackground source={Fundo} resizeMode="cover" style={styles.home}>

<Text>
HOMEPAGE
</Text>

</ImageBackground>

</View>
);
}