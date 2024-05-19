import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const IDPage = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
        <Text style = {styles.PageTitle}>I am a</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ChooseTutor")} style = {styles.button} >
            <Text style = {styles.buttonText}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} >
            <Text style = {styles.buttonText}>Teacher</Text>
        </TouchableOpacity>
        <StatusBar  />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    PageTitle: {
        fontSize: height * 0.06,
        color: 'black',
        fontWeight: 'light',
        marginTop: height * 0.25,
        marginLeft: width * 0.1,
        marginBottom: height * 0.1,
    },
  button: {
    alignItems: "center",
    backgroundColor: "#C0E8E3",
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
    width: width * 0.8,
    height: height * 0.1,
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

export default IDPage;
