import{View,Text,StyleSheet, Dimensions, TouchableOpacity,ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { LineChart } from "react-native-chart-kit";

  export default function Gestores({ navigation }){

      const [fontsLoaded] = useFonts({
      Poppins_400Regular,
      Poppins_700Bold,
    });

    if (!fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        </View>
      );
    }
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulopag}>Gestão de pontos</Text>
        <Ionicons name='exit' size={40} style={styles.exit} onPress={()=>navigation.navigate('LoginScreen')} />
          
      </View>
      <View style={styles.main}>
            <View>
              <Text style={styles.titulo}>Funcionarios :</Text>
              <Text style={styles.funci}>João Jose da Silva</Text>
              <Text style={styles.funci}>João Jose da Silva</Text>
              <Text style={styles.funci}>João Jose da Silva</Text>
              <Text style={styles.funci}>João Jose da Silva</Text>
            </View>
            <View>
              <Text style={styles.titulo}>Função :</Text>
              <Text style={styles.funci}>Caixa</Text>
              <Text style={styles.funci}>Repositor</Text>
              <Text style={styles.funci}>Repositor</Text>
              <Text style={styles.funci}>Atendente</Text>
            </View>
            <View>
              <Text style={styles.titulo}>Status hoje :</Text>
              <Text style={[styles.funci, styles.presente]}>Presente</Text>
              <Text style={[styles.funci, styles.presente]}>Presente</Text>
              <Text style={[styles.funci, styles.falta]}>Faltou</Text>
              <Text style={[styles.funci, styles.presente]}>Presente</Text>
            </View>
      </View>
      <View>
        <TouchableOpacity style={styles.justificar} >
          <Text>Justificar Faltas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cards}>
        <TouchableOpacity style={styles.dados} >
          <Ionicons name='close-circle' size={50} color={'red'}/>
          <Text>Total Faltas</Text>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dados}>
           <Ionicons name='checkmark-circle' size={50} color={'green'}/>
            <Text>Presenças</Text>
          <Text>25</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dados}>
          <Ionicons name='alarm' size={50} color={'blue'}/>
           <Text>Horas Extras</Text>
          <Text>35 hrs</Text>
        </TouchableOpacity>
      </View>
          <View style={{ flex: 1, backgroundColor: '#fff', padding: 20, marginTop:40}}>
      <View
        style={{
          backgroundColor: '#f8f8f8',
          borderRadius: 12,
          padding: 15,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          marginTop: 0,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold',  }}>
          Gráfico de Presenças
        </Text>
        <LineChart
          data={{
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
            datasets: [{ data: [8, 7, 9, 6, 8] }],
          }}
          width={Dimensions.get("window").width - 60}
          height={220}
          yAxisLabel=""
          yAxisSuffix="h"
          chartConfig={{
            backgroundColor: '#ffffffff',
            backgroundGradientFrom: '#ffffffff',
            backgroundGradientTo: '#ffffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: { borderRadius: 12 },
          }}
          bezier
          style={ styles.grafic}
        />
      </View>
    </View>

      
    </ScrollView>
  );
}
const styles = StyleSheet.create({
container:{
  flex:1,
    backgroundColor:'#0264b0'
},
header:{
  backgroundColor:'#b31921',
  height:100,
  justifyContent:'space-between',
},
titulopag:{
  fontFamily:'Poppins_700Bold,',
  color:'white',
  textAlign:'right',
  top:55,
  marginRight:30,
  fontSize:20
},
exit:{
  marginLeft:10,
  top:-10,
  color:'white'
},
main:{
   backgroundColor:'#b31921',
   marginTop:20,
   width:400,
   marginLeft:'auto',
   marginRight:'auto' ,
   borderRadius:10,
   flexDirection:'row',
   paddingBottom:20
},
titulo:{
    color:'white',
    marginLeft:10,
    fontFamily:'Poppins_700Bold'
},
funci:{
  marginLeft:20,
  fontSize:16,
  color:'white',
  fontFamily:'Poppins_400Regular'
},
falta:{
  backgroundColor:'white',
  color:'red'
},
presente:{
  backgroundColor:'green',
  color:'white'
},
footer:{
   backgroundColor:'#b31921',
   marginTop:20,
   width:400,
    marginLeft:'auto',
   marginRight:'auto',
   borderRadius:10,
   height:100
},
cards:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:50,
  marginLeft:20,
  marginRight:20,
},
dados:{
  backgroundColor:'white',
  borderRadius:10,
  width:100,
  height:100,
  alignItems:'center'
},
justificar:{
  width:120,
  height:40,
  backgroundColor:'#ed2633',
  textAlign:'center',
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:20,
  borderRadius:10,
  padding:10
},
grafic:{
  borderRadius:12,
  marginTop:15
}
})
