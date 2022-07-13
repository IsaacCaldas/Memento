import { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, Switch } from 'react-native'

import { Context } from '../../context/context'

// Styles
import { Container, Label, Button, ButtonLabel  } from '../../styles/global_styles'
import { Display } from './style'

export default function TaskList() {

  const { theme, setTheme, datePeriod, 
    isVisible, setVisibility } = useContext(Context);

  const display_colors = ['#468a6a', '#4e69ed', '#bf0a4c']

  const [isEnabled, setIsEnabled] = useState(false)
  const [bg_theme, setBgTheme] = useState()

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onCancel = () => {
    console.log('Hello World!')
  }

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
    <Container bold={true}>
      <Display bg_theme={bg_theme}>
        <View style={styles.box}>
          <Label color="#efefef" size={30} weight='bold' bottom={10}>{datePeriod}</Label>
          <Label color="#efefef" size={15} weight={500}>Qui, 7 de julho</Label>
        </View>
        <View style={[styles.box, { alignContent: 'flex-end', alignItems: 'flex-end' }]}>
          <Button bg_color={!theme && '#bbb4'}
            margin={'0 0 10px 0'}
            onPress={() => setTheme(!theme)}
          >
            <ButtonLabel bold>{theme ? 'Dark' : 'Light'} mode</ButtonLabel>
          </Button>
          <Button 
            bg_color={!theme && '#bbb4'}
            onPress={() => setVisibility(!isVisible)}>
            <ButtonLabel bold>{isVisible ? 'Cancelar' : 'Nova tarefa'}</ButtonLabel>
          </Button>
        </View>
      </Display>
    </Container>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  }
})
