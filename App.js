import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ClubDetailsPage from './src/screens/ClubDetails';
import DrinkDetailsScreen from './src/screens/DrinkDetails';
import HomeScreen from './src/screens/homescreen';

export default function App() {
  return (
    <View style={styles.container}>
      <DrinkDetailsScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // marginVertical: 30, // Temporary Solution
  },
});
