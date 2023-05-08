import { View, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/screens/appTheme';

export default function App() {
  return (
    <View style={styles.background} >
      <StatusBar />
      <CalculatorScreen />
      
    </View>
  );
}

// const styles = StyleSheet.create({
 
// });
