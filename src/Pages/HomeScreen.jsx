import {View, Text, Button} from 'react-native';
import WebView from 'react-native-webview';

const HomeScreen = () => {
  return (
    <WebView
      source={{
        uri: 'https://codepen.io/bsehovac/full/EMyWVv',
      }}
      style={{
        display: 'flex',
        marginTop: -60,
      }}
    />
  );
};

export default HomeScreen;
