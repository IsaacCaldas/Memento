import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, View } from 'react-native'

import { ThemeContext } from './src/context/context'

import Home from './src/pages/Home'
import Auth from './src/pages/Auth'

console.disableYellowBox = true;

export default function App() {
  return (
    <ThemeContext> 
      <View style={styles.container}>
        <Auth/>
      </View>
    </ThemeContext>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#333'
  }
});