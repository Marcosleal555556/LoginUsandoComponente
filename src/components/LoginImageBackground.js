import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../styles/StyleSheet';
export default function Fundo({ source }){

return (
<View style={styles.container}>

<ImageBackground
        source={source} style={styles.fundo} 
    
      />

</View>
);
}