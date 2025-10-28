import{View,Text,Button,StyleSheet, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }){
  return (
    <View style={styles.content}>
      <View style={styles.topo}>
        <Image
              source={require('./assets/logo.png')}
              style={styles.logo}
              />
      </View>
      <View style={styles.containercentral}>
        <Text style={styles.textCentral}>Clique para registrar seu ponto.</Text>
         <Ionicons name="camera-outline" size={50} color="#8b8b8bff"  style={styles.icone}/>
      </View>
      <View style={styles.footer}>
        <View>
          <Ionicons name="analytics" size={50} color="#000000ff"/>
          <Text style={styles.registroBtn}> Registros</Text>
        </View>
        <View>
          <Ionicons name="exit" size={50} color="#000000ff"/>
          <Text style={styles.sairBtn}>Sair</Text>
        </View>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  content:{
    flex:1
  },
  topo:{
    paddingBottom: '2%',
    backgroundColor: '#e2e2e2ff',
    alignItems:'center'
  },
  logo:{
    width:100,
    height:90,
  },
  icone:{ // icone central de camera
    padding:10,
    borderRadius: 40,
    borderWidth: 2,
    borderColor:'#979696ff' 
  },
  textCentral:{
    marginBottom:20,
    fontSize: 20,
    color:'#3d3c37ff'
  },
  containercentral:{ // todo o conteudo do centro da tela
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:'#f5f6f7'
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    marginBottom:16,
    backgroundColor:'#e2e2e2ff',
  },
  registroBtn:{ // botao que encaminha para historico de pontos batidos
    color:'#000000ff',
  },
  sairBtn:{
    color:'#000000ff',
  }
})

