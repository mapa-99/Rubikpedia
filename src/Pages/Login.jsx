import {useEffect, useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {auth} from '../constants/firebase';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [habilita, setHabilita] = useState(false);
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    if (password.length >= 6 && email.match(regexEmail)) {
      setHabilita(true);
      console.log(email);
    } else {
      setHabilita(false);
    }
  }, [email, password, setPassword, setHabilita]);

  const handleLogin = async () => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  const handleGoToRegister = async () => {
    navigation.push('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Rubikpedia</Text>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
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
        <Button title="Login" onPress={handleLogin} disabled={!habilita} />
        <Button
          title="Registro"
          onPress={handleGoToRegister}
          style={{marginBottom: 50}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 35,
    marginBottom: 12,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 3,
  },
  baseText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'Roboto',
    marginTop: 50,
  },
  logo: {
    width: 175,
    height: 175,
    resizeMode: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  btns: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
});

export default Login;
