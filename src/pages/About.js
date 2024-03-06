import { Text, View, StyleSheet, Image } from 'react-native';
import { styles } from '../styles/StyleSheet';
const ImagemAbout = {
    uri: 'https://cdn.awsli.com.br/800x800/588/588139/produto/167794011/d808ee33c2.jpg',
  }

export default function SecondComponent() {

return (
<View style={styles.container}>

<Image
        source={source} style={styles.imagem} 
    
      />
<Text style={styles.text}>Fazer Login</Text>
</View>
);
}

