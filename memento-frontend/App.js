import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'

import { ThemeContext } from './src/context/context'

import Home from './src/pages/Home'

export default function App() {
  return (
    <ThemeContext> 
      <SafeAreaView style={styles.container}>
        <Home/>
      </SafeAreaView>
    </ThemeContext>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  }
});