import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';


const { width, height } = Dimensions.get('window');


const ReviewSlide3 = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
        <Text style = {styles.PageTitle}></Text>
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewSlide4")} style = {styles.button} >
                        <Text style = {styles.buttonText}>This result took your average from 11 to 12. Your effort is showing xD.</Text>
                    </TouchableOpacity>
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
    marginTop: height * 0.03,
  },
 
});

export default ReviewSlide3;
