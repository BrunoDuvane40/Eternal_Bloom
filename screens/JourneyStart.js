import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';


const { width, height } = Dimensions.get('window');


const JourneyStart = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/background2.png')} style={styles.container}>
        <Text style = {styles.PageTitle}>My Journey</Text>
            <View style={styles.buttonss}>
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate("CurricularUnit")} style = {styles.button} >
                        <Image source={require('../assets/pi.png')} style={{width: width * 0.1, height: width * 0.1, marginTop: height * 0.05}} />
                        <Text style = {styles.buttonText}>Maths</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("JourneyStart")} style = {styles.button}>
                        <Image source={require('../assets/Beaker.png')} style={{width: width * 0.12, height: width * 0.12, marginTop: height * 0.05}} />
                        <Text style = {styles.buttonText}>Science</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate("JourneyStart")} style = {styles.button} >
                        <Image source={require('../assets/Paint.png')} style={{width: width * 0.2, height: width * 0.1, marginTop: height * 0.05}} />
                        <Text style = {styles.buttonText}>Arts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("JourneyStart")} style = {styles.button} >
                        <Image source={require('../assets/Atom.png')} style={{width: width * 0.1, height: width * 0.1, marginTop: height * 0.05}} />
                        <Text style = {styles.buttonText}>Physics</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress = {() => navigation.navigate("ReportPage")} style = {styles.flipButton}>
                <Image source={require('../assets/rotate.png')} style={{width: width * 0.12, height: width * 0.12, marginTop: height * 0.025, marginLeft: width*0.04}} />
            </TouchableOpacity> 
        <StatusBar  />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height*1.2,
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
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: height * 0.02,
    marginLeft: width * 0.05,
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize:  height * 0.03,
    color: 'black',
    fontWeight: 'light',
    marginTop: height * 0.03,
  },
  buttonss: {
    marginLeft: height * 0.015,
  },
  flipButton: {
    backgroundColor: '#DADADA',
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    marginTop: height * 0.16,
    marginLeft: width * 0.8,
  },
});

export default JourneyStart;
