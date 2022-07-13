import { useContext } from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-picker/picker';

import { Context } from '../../context/context'

import Task from '../Task'
import InputTask from '../InputTask';

export default function TaskList() {

  const { theme, datePeriod, setDatePeriod } = useContext(Context)

  const date_period = [
    { id: 0, name: "Hoje" }, 
    { id: 1, name: "Esta semana" }, 
    { id: 2, name: "Este mês" }
  ]

  // const tasks = null
  const tasks = [
    { id: 0, description: 'Fazer compras no supermercado', date: 'Hoje, 7 de julho'},
    { id: 1, description: 'Levar os cachorros para passear', date: 'Hoje, 7 de julho'},
    { id: 2, description: 'Buscar a encomenda no correio', date: 'Sex, 8 de julho'},
    { id: 3, description: 'Pagar a academia', date: 'Sex, 8 de julho'},
    { id: 4, description: 'Comprar as passagens para o camping', date: 'Hoje, 7 de julho'},
    { id: 5, description: 'Chamar o encanador', date: 'Seg, 11 de julho'},
    { id: 6, description: 'Comprar remédio de gripe', date: 'Seg, 11 de julho'},
    { id: 7, description: 'Levar o carro para revisão', date: 'Seg, 11 de julho'},
    { id: 8, description: 'Tirar uma cópia da chave de casa', date: 'Seg, 11 de julho'},
    { id: 9, description: 'Pagar a faculdade', date: 'Seg, 11 de julho'},
    { id: 10, description: 'Fazer uma festa de aniversário', date: 'Sáb, 16 de julho'},
  ]

  return (
    <View style={[styles.container, { backgroundColor: theme ? '#fcfcfc' : '#212121'}]}>
      { tasks ? 
        <>
          <InputTask/>
          <View style={styles.pickerArea}>
            <Picker style={[styles.picker, {  
                backgroundColor: theme ? '#e4e4e4' : '#1b1b1b',
                borderColor: theme ? '#fcfcfc' : '#1d1d1d',
                color: theme ? '#222' : '#efefef'
              }]}
              selectedValue={datePeriod}
              onValueChange={(itemValue, itemIndex) => {setDatePeriod(itemValue)}}
            >
              {date_period.map(date => <Picker.Item label={date.name} key={date.id} value={date.name} /> )}
            </Picker>
          </View>
          <FlatList
            data={tasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => <Task key={index} id={item.id} description={item.description} date={item.date}/>}
          />
        </>
      :
        <ActivityIndicator size="large" color="#468a6a"/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 3,
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  pickerArea: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  picker: {
    width: '100%',
    height: 40,
    borderWidth: 0,
    padding: 10,
    fontWeight: 'bold'
  },
})
