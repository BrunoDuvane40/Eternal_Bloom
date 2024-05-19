import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const GlobalFeedback = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
        <Text style = {styles.PageTitle}>Global Feedback</Text>
        <View style = {styles.button} >
            <Text style = {styles.buttonText}>Youtube Playlists</Text>
        </View>
        <View style = {styles.button} >
            <Text style = {styles.buttonText}>Recommended Teachers</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ChooseTutor")} style = {styles.button} >
        <Text style = {styles.buttonText}>Student Helpers</Text>
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
        fontSize: height * 0.05,
        color: 'black',
        fontWeight: 'light',
        marginTop: height * 0.25,
        marginLeft: width * 0.1,
        marginBottom: height * 0.1,
    },
  button: {
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    marginTop: height * 0.025,
    marginLeft: width * 0.125,
    width: width * 0.78,
    height: height * 0.10,
    borderRadius: 5,
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

export default GlobalFeedback;
