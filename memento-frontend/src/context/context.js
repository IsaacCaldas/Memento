import { createContext, useState } from 'react'

export const Context = createContext({})

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(true)
  const [datePeriod, setDatePeriod] = useState('Hoje')

  return (
    <Context.Provider value={{ theme, setTheme, datePeriod, setDatePeriod}}>
      {children}
    </Context.Provider>
  )
}