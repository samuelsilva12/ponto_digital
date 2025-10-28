import{View,Text,Button,StyleSheet, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Registros(){
  return(
    <View style={styles.container}>
      <Text style={styles.textoCabeca}>Registros de ponto: </Text>
      <View>
        <Text>Data</Text>
        <Text>Entrada</Text>
        <Text>Saída</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#514099',
    flex:1
  },
  textoCabeca:{
    color:'#ffffff',
    fontSize:20,
    marginTop:5,
    marginLeft:15
  }
})