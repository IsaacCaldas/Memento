import { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import moment from 'moment';
import 'moment/locale/pt-br'

import { Context } from '../../context/context'
import { tasks_list } from './tasks';

import Task from '../Task'
import InputTask from '../InputTask';

export default function TaskList() {

  const { theme, datePeriod, setDatePeriod, hiddenTasks } = useContext(Context)

  // const tasks = null
  const [tasks, setTasks] = useState(tasks_list)
  const [visibleTasks, setTaskVisibility] = useState()

  const date_period = [
    { id: 0, name: "Hoje" }, 
    { id: 1, name: "Esta semana" }, 
    { id: 2, name: "Este mês" }
  ]


  useEffect(() => {
    handleVisibility()
  }, [hiddenTasks])

  function handleVisibility() {
    let visible_tasks = null

    if(hiddenTasks) {
      visible_tasks = [...tasks]
    } else {
      visible_tasks = tasks.filter(task => task.done === false)
    }

    setTaskVisibility(visible_tasks)
  }

  function handleTask(id) {
    let arr_changed = [...tasks]
    arr_changed.map(task => {
      if (task.id == id) {
        task.done ? task.done = false : task.done = true
        task.updated_at = new Date()
      }
    })
    setTasks(arr_changed)
    handleVisibility()
  }

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
            data={visibleTasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => <Task key={index} id={item.id} 
              description={item.description} done={item.done} 
              updated_at={item.updated_at} created_at={item.created_at}
              handleTask={handleTask}/>
            }
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
