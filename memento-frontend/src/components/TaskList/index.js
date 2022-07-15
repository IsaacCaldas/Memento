import { useState, useEffect, useRef, useContext } from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator, Platform, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import 'moment/locale/pt-br'

import { Context } from '../../context/context'
import { tasks_list } from './tasks';
import { Label, Button, ButtonLabel  } from '../../styles/global_styles'

import Task from '../Task'
import InputTask from '../InputTask';

export default function TaskList() {

  const { theme, isVisible, setVisibility, datePeriod, 
    setDatePeriod, hiddenTasks, bg_theme } = useContext(Context)

  // const tasks = null
  const [tasks, setTasks] = useState(tasks_list)
  const [visibleTasks, setTaskVisibility] = useState()
  const [pickerIos, setIsIos] = useState(false)

  const pickerRef = useRef();

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

  const others = {
    backgroundColor: theme ? '#e4e4e4' : '#1b1b1b',
    borderColor: theme ? '#fcfcfc' : '#1d1d1d',
    color: theme ? '#222' : '#efefef',
  }

  // FOR ANDROID
  const open = () => pickerRef.current.focus();
  const close = () => pickerRef.current.blur();

  function handleSaveTask(new_task) {
    const { description } = new_task

    if (!description || !description.trim()) {
      return Alert.alert('Dados incompletos', 'Preencha a descrição antes de salvar!')
    }

    let tasks_array = tasks
    new_task.id = tasks_array.length
    tasks_array.push(new_task)
    setTasks(tasks_array)
    setVisibility(false)
    handleVisibility()
  }

  function handleDeleteTask(id) {
    let array_with_task_deleted = tasks.filter(task => task.id !== id)
    setTasks(array_with_task_deleted)
    handleVisibility()
  }
  
  return (
    <View style={[styles.container, { backgroundColor: theme ? '#fcfcfc' : '#212121'}]}>
      { tasks ? 
        <>
          { isVisible ? <InputTask handleSaveTask={handleSaveTask}/>
          :
          <>
            {Platform.OS !== 'ios' ? 
              <>
                <Picker style={[styles.picker, others]}
                ref={pickerRef}
                selectedValue={datePeriod}
                onValueChange={(itemValue, itemIndex) => {setDatePeriod(itemValue)}}
                itemStyle={{ color: theme ? '#555' : '#efefef'
                }}>
                  {date_period.map(date => <Picker.Item label={date.name} key={date.id} value={date.name} /> )}
                </Picker>
              </>
            :
              <>
                <Button bg_color={bg_theme} style={{width: '100%', borderRadius: 0}}
                onPress={() => setIsIos(!pickerIos)}
                >
                  <ButtonLabel bold>
                    {pickerIos ? 'Salvar' : 'Selecionar período'}
                  </ButtonLabel>
                </Button>
                { pickerIos && 
                  <Picker style={{marginBottom: 100}}
                  selectedValue={datePeriod}
                  onValueChange={(itemValue, itemIndex) => {setDatePeriod(itemValue)}}
                  itemStyle={{ 
                    color: theme ? '#444' : '#efefef',
                    marginBottom: -120, marginTop: -10
                  }}>
                    {date_period.map(date => <Picker.Item label={date.name} key={date.id} value={date.name} /> )}
                  </Picker>
                }
              </>
            }
            <FlatList
              data={visibleTasks}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item, index }) => (
                <Task key={index} id={item.id} done={item.done}
                description={item.description} estimated_at={item.estimated_at}
                updated_at={item.updated_at} created_at={item.created_at}
                handleTask={handleTask} handleDeleteTask={handleDeleteTask}/>
              )}
            />
          </>
          }
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
  }
})
