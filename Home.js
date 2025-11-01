import{View,Text,Button,StyleSheet, Image, TouchableOpacity} from 'react-native'
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
        <Image 
        source={require('./assets/face.png')}
        style={styles.face}
        />
        <Text style={styles.textCentral}>Clique para registrar seu ponto.</Text>
        <Image source={require('./assets/seta.png')} style={styles.imgSeta} />
         
      </View>
      <View style={styles.footer}>
       <TouchableOpacity style={styles.btnesq}>
        <Ionicons name="analytics" size={45} color="#e9e9e9ff" onPress={() => navigation.navigate('Registros')}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btnmeio}>
           <Ionicons name="camera-outline" size={50} color="#b31921"  style={styles.iconCamera}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btndir}>
        <Ionicons name="exit" size={50} color="#e9e9e9ff" onPress={() => navigation.navigate('LoginScreen')}/>
       </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#0264b0',
  },
  topo:{
    backgroundColor: '#ed2633',
    alignItems:'center',
    height:120
  },
  logo:{
    width:100,
    height:90,
    marginTop:30
  },
  textCentral:{
    fontSize: 20,
    color:'#e9e9e9ff',
    marginBottom:15
  },
  containercentral:{ // todo o conteudo do centro da tela
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
    
    marginTop:5
  },
  face:{
    height:80,
    width:80,
    marginBottom:40
  },
  imgSeta:{
    height:'30%',
    width:'40%',
    transform:[{rotate:'45deg'}],
    marginLeft:'45%',
    marginRight:'55%',
    marginBottom:50
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#ed2633'
  },
  btnesq:{
    top:+19
  },
  btnmeio:{
    top:-45,
    borderWidth:7,
    borderRadius:'50%',
    padding:15,
    backgroundColor:'#e9e9e9ff',
    borderColor:'#0264b0'
  }, 
  btndir:{
    top:+19
  }
})
