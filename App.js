import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './app/screens/navigation';
import { store } from './app/store';


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
