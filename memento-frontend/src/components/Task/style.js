import styled from 'styled-components/native'

export const Task = styled.View`
  background-color: ${({theme_context}) => theme_context ? '#ececec' : '#363636'};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme_context}) => theme_context ? '#ddd' : '#2c2c2c'};
`

export const CheckBall = styled.View`
  background-color: ${({isChecked, theme_context}) => isChecked ? '#468a6a' : theme_context ? '#ddd ': '#2f2f2f' }
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: ${({isChecked}) => isChecked ? '0px' : '1px solid'} ${({theme_context}) => theme_context ? '#efe' : '#444'};
  margin-right: 15px;
`