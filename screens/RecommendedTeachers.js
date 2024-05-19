import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const RecommendedTeachers = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
        <Text style = {styles.PageTitle}>Students</Text>
        <View style = {styles.button} >
            <Text style = {styles.buttonText}>Ana Sofia Ferrão</Text>
        </View>
        <View style = {styles.button} >
            <Text style = {styles.buttonText}>Anita Duarte</Text>
        </View>
        <View style = {styles.button} >
            <Text style = {styles.buttonText}>Marta Reis</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ChooseTutor")} style = {styles.button} >
            <Text style = {styles.buttonText}>Rui Pais</Text>
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
        marginTop: height * 0.15,
        marginLeft: width * 0.1,
        marginBottom: height * 0.1,
    },
  button: {
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    marginTop: height * 0.025,
    marginLeft: width * 0.175,
    width: width * 0.65,
    height: height * 0.09,
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

export default RecommendedTeachers;
