import AnimatedLottieView from 'lottie-react-native';
import {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {auth} from '../constants/firebase';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    await auth.createUserWithEmailAndPassword(email, password);
  };

  const handleGoToLogin = async () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AnimatedLottieView
          source={require('../../assets/lf30_editor_iedtiqta.json')}
          autoPlay
          loop
          style={{
            width: 300,
            height: 300,
            alignSelf: 'center',
            marginVertical: -60,
          }}
        />
      </View>
      <Text style={styles.baseText}>Registrate</Text>
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Enter email@email.com"
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <View style={styles.line} />
      <View style={styles.btns}>
        <Button title="Registrar" onPress={handleRegister} />
      </View>
      <TouchableOpacity onPress={handleGoToLogin}>
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            fontSize: 15,
            marginBottom: 10,
          }}>
          Regresar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 3,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 35,
    marginBottom: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  baseText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Roboto',
  },
  btns: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
});

export default Register;
