import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../styles/StyleSheet';
const ImagemFundo = {
  uri: 'https://img.freepik.com/vetores-gratis/fundo-branco-monocromatico-de-estilo-de-papel_23-2149008530.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700611200&semt=ais',
}
export default function Home({ source }){

return (
<View style={styles.container}>


<ImageBackground source={require('../assets/imagens/imagem.png')} style={styles.image}>

<Text style={styles.text}>Página Home</Text>


</ImageBackground>

</View>
);
}