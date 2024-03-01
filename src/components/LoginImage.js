import { Text, View, StyleSheet, Image } from 'react-native';
import { styles } from '../styles/StyleSheet';

export default function Imagem({ source }) {

return (
<View style={styles.imagem}>



<Image
        source={source} style={styles.imagem} 
    
      />
</View>
);
}