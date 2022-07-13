import { useState, useContext } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { Context } from '../../context/context'

// Style
import IconFA from 'react-native-vector-icons/FontAwesome';
import { Label } from '../../styles/global_styles'
import { Task, CheckBall } from './style'

// Functions
import { 
  rightSwipeActions, 
  swipeFromRightOpen,
  // leftSwipeActions,
  // swipeFromLeftOpen
} from '../../utils/swipes'

export default function TaskItem({id, description, date}) {

  const { theme } = useContext(Context)

  const [isChecked, setChecked] = useState(false)

  return (
    <Swipeable
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={() => swipeFromRightOpen(id)}
      // renderLeftActions={leftSwipeActions}
      // onSwipeableLeftOpen={() => swipeFromLeftOpen(id)}
    >
      <TouchableOpacity onPress={() => setChecked(!isChecked)}>
        <Task theme_context={theme}> 
          <CheckBall isChecked={isChecked} theme_context={theme}> 
            {isChecked && <IconFA name="check" size={15} color="#fff" />}
          </CheckBall>
          <View style={styles.labelArea}>
            <Label tick={isChecked} size={16} theme_context={theme}>{description}</Label>
            <Label weight='bold' size={12} theme_context={theme}>{date}</Label>
          </View>
        </Task>
      </TouchableOpacity>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  labelArea: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

