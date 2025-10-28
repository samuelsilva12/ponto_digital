import{View,Text,Button,StyleSheet, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Registros(){
  return(
    <View style={styles.container}>
        <View style={styles.bordaTop}>
          <Text style={styles.textoCabeca}>Registros de ponto: </Text>
          <View style={styles.info}>
            <Text>Data</Text>
            <Text>Entrada</Text>
            <Text>Saída</Text>
          </View>
         
        </View>
             <View style={styles.historico}>
            <Text>10/10/2025</Text>
            <Text>08:00</Text>
            <Text>18:00</Text>
          </View>
        <View>
            
        </View>
        <View style={styles.footer}>
              <View>
                <Ionicons name="home" size={50} color="#000000ff"/>
                <Text style={styles.homeBtn}>  Home</Text>
              </View>
              <View>
                <Ionicons name="exit" size={50} color="#000000ff"/>
                <Text style={styles.sairBtn}>Sair</Text>
              </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f6f7'
  },
  textoCabeca:{ //nome da pagina de registro no topo
    color:'#1953c0ff',
    fontSize:20,
    marginTop:5,
    marginLeft:10
  },
  bordaTop:{
    backgroundColor:'#e2e2e2ff'
  },
  info:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingBottom:15
  },
  historico:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    marginBottom:16,
    backgroundColor:'#e2e2e2ff',
  }
})