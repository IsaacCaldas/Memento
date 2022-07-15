import { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'

import { Container, Form, Label, Input, Button, ButtonLabel } from '../styles/global_styles'

import bg_image from '../../assets/background.jpg'

export default function Auth() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // padding: ${({padding}) => padding ? padding : 10}px;
  // margin: ${({margin}) => margin ? margin : '10px 0'};
  // border: ${({border}) => border ? border : 'none'};

  return (
    <ImageBackground source={bg_image} style={styles.background}>
      <Container filter="blur(2px)" bg_color='#00000055' width='100%'>
        <Label color="#efefef" size={45} weight='bold' bottom={20}>
          Memento
        </Label>
        <Form height={400} padding={15} bg_color='#000000aa'>
          <Label color="#efefef" size={35} weight='bold' bottom={20}>
            Entrar
          </Label>
          <Input
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Digite seu email"          
            placeholderTextColor="#ddd"
            bg_color='#0005'
            height={60}
            txt_size='20px'
            color='#ddd'
            margin='15px 0'
          />
          <Input
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Digite sua senha"          
            placeholderTextColor="#ddd"
            bg_color='#0005'
            height={60}
            txt_size='20px'
            color='#ddd'
            margin='10px 0'
          />
          <Button onPress={() => console.log('OI')} 
          style={{marginVertical: 10, width: '100%'}}>
            <ButtonLabel bold>ENTRAR</ButtonLabel>
          </Button>
        </Form>
      </Container>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})