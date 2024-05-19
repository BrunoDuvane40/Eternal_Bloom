import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');


const ChooseTutor = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/background-choose-tutor.png')} style={styles.container}>        
        <View style={styles.buttonContent}>
            <View style={styles.infoBlock}>
              <Text style={styles.infoText}>1h</Text>
              <Text style={styles.labelText}>Tempo de</Text>
              <Text style={styles.labelText}> resposta</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoText}>20€</Text>
              <Text style={styles.labelText}>Preço</Text>
              <Text style={styles.labelText}> horas/aula</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoText}>10+</Text>
              <Text style={styles.labelText}>Número</Text>
              <Text style={styles.labelText}>de alunos</Text>
            </View>
         </View>

         <ImageBackground source={require('../assets/calendar-overlay.png')} style={styles.calendarContainer}/>        

         <TouchableOpacity onPress={() => navigation.navigate("JourneyStart")} style = {styles.buttonAdd} >
                        <Text style = {styles.buttonText}>Add Avaliability</Text>
                    </TouchableOpacity>
        <StatusBar  />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height*1.09,
    width: width,
  },
    PageTitle: {
        fontSize: height * 0.05,
        color: 'black',
        fontWeight: 'light',
        marginTop: height * 0.15,
        marginLeft: width * 0.4,
        marginBottom: height * 0.1,
    },
    profile:{
    alignItems: "center",
    backgroundColor: "#000000",
    marginTop: height * 0.2,
    marginLeft: width * 0.23,
    width: width * 0.6,
    height: height * 0.30,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,

    },
    
  buttonContent: {
    flexDirection: 'row',
    marginTop: height * 0.44,
    marginLeft: width * 0.23,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width*0.5,
    gap:width*0.1,
  },
  infoBlock: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: height * 0.025,
    color: 'black',
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: height * 0.014    ,
    color: 'gray',
  },
  buttonAdd: {
    alignItems: "center",
    backgroundColor: "#000000",
    marginTop: height * 0.04,
    marginLeft: width * 0.26,
    width: width * 0.5,
    height: width * 0.16,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  
  buttonText: {
    fontSize:  height * 0.02,
    color: 'white',
    fontWeight: 'light',
    marginTop: height * 0.03,
  },
  calendarContainer:{
    marginTop: height * 0.07,
    marginLeft: width * 0.15,
    width: width * 0.7,
    height: width * 0.6,
  }
});

export default ChooseTutor;
