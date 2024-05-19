import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';

const { width, height } = Dimensions.get('window');


const ReportPage = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/background3.png')} style={styles.container}>
        
           <Image source={require('../assets/report.png')} style={{width: width * 0.7, height: height * 0.9, marginTop: height * 0.075, marginLeft: width * 0.15}} />
        <StatusBar  />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height*1.05,
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
    marginTop: height * 0.10,
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
    marginLeft: width * 0.8,
  },
});

export default ReportPage;
