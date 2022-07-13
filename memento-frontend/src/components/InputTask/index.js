import { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import { Context } from '../../context/context'
import { Input, Label, Button, ButtonLabel  } from '../../styles/global_styles'

export default function InputTask() {

  const { theme, isVisible, datePeriod } = useContext(Context);

  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [bgTheme, setBgTheme] = useState('#468a6a')

  const addTask = () => {
    console.log('Hello World')
  }
  const display_colors = ['#468a6a', '#4e69ed', '#bf0a4c']

  useEffect(() => {
    switch (datePeriod) {  
      case 'Esta semana':
        setBgTheme(display_colors[1])
        break
      case 'Este mês':
        setBgTheme(display_colors[2])
        break
      case 'Hoje':
      default:
        setBgTheme(display_colors[0])
        break
    }
  }, [datePeriod])
  
  return (
    <>
      { isVisible && 
        <View style={styles.inputArea}>
          <Label color={theme ? "#333" : "#efefef"} size={30} weight='bold' bottom={10}>Nova tarefa</Label>
          <Input
            theme_context={theme}
            onChangeText={(text) => setDescription(text)}
            value={description}
            placeholder="Enter a description"          
            placeholderTextColor="#555"
          />
          <Input
            theme_context={theme}
            onChangeText={(text) => setDate(text)}
            value={date}
            placeholder="Enter date time"          
            placeholderTextColor="#555"
          />
          <Button bg_color={bgTheme} onPress={() => addTask()} style={{marginVertical: 10, width: '100%'}}>
            <ButtonLabel bold>Salvar</ButtonLabel>
          </Button>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  inputArea: {
    width: '100%',
    height: 'auto',
    padding: 10
  }
})