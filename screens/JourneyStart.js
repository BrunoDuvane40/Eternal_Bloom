import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';


const { width, height } = Dimensions.get('window');


const JourneyStart = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/background2.png')} style={styles.container}>
        <Text style = {styles.PageTitle}>My Journey</Text>
            <View style={styles.buttons}>
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate("CurricularUnit")} style = {styles.button} >
                        <Text style = {styles.buttonText}>Maths</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("JourneyStart")} style = {styles.button} >
                        <Text style = {styles.buttonText}>Student</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate("JourneyStart")} style = {styles.button} >
                        <Text style = {styles.buttonText}>Student</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("JourneyStart")} style = {styles.button} >
                        <Text style = {styles.buttonText}>Student</Text>
                    </TouchableOpacity>
                </View>
            </View>
        <StatusBar  />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
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
 
});

export default JourneyStart;
