import styled from 'styled-components/native'

export const Label = styled.Text`
  color: ${({color, theme_context}) => color ? color : theme_context ? '#222' : '#efefef'};
  font-size: ${({size}) => size ? size : '20'}px;
  font-weight: ${({weight}) => weight ? weight : 'normal'};
  margin-bottom: ${({bottom}) => bottom ? bottom : 0}px;
  text-decoration: ${({tick}) => tick ? 'line-through' : 'none'};
  text-decoration-color: ${({theme_context}) => theme_context ? '#222' : '#efefef'};
`
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const Button = styled.TouchableOpacity`
  background-color: ${({bg_color}) => bg_color || '#3334'};
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 40px;
  border-radius: 5px;
  margin: ${({margin}) => margin || '0'};
`
export const ButtonLabel = styled.Text`
  color: ${({dark}) => dark ? '#111' : '#efefef'};
  font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
`