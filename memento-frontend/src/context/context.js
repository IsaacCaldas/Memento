import { createContext, useState } from 'react'

export const Context = createContext({})

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(true)
  const [datePeriod, setDatePeriod] = useState('Hoje')
  const [isVisible, setVisibility] = useState(false)

  return (
    <Context.Provider 
      value={
      { theme, setTheme, datePeriod, setDatePeriod,
        isVisible, setVisibility
      }
    }>
      {children}
    </Context.Provider>
  )
}