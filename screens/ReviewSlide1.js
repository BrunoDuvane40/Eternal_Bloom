import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';


const { width, height } = Dimensions.get('window');


const ReviewSlide1 = ({navigation}) => {
    return (
      <ImageBackground source={require('../assets/background.png')} style={styles.container}>
        <Text style={styles.PageTitle}></Text>
        <TouchableOpacity onPress={() => navigation.navigate("ReviewSlide2")} style={styles.button}>
        <Text style = {styles.buttonText}>In the last test you scored 13/20</Text>
        </TouchableOpacity>
        <StatusBar />
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
        fontSize: height * 0.025,
        color: 'black',
        fontWeight: 'light',
        marginTop: height * 0.15,
        marginLeft: width * 0.4,
        marginBottom: height * 0.1,
    },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: height * 0.015,
    marginLeft: width * 0.05,
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#76F9BF',
  },
  buttonText: {
    fontSize:  height * 0.05,
    color: 'black',
    fontWeight: 'light',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.1,
  },
 
});

export default ReviewSlide1;
