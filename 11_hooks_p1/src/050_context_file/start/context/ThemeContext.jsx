import { useContext, createContext } from "react";
import { useState } from "react";

export const themeContext = createContext();

export const ThemeContext = ({ children }) => {

  const [theme, setTheme] = useState('light');

  return (
    <themeContext.Provider value={[theme, setTheme]} >
      {children}
    </themeContext.Provider>
  )
}

export const useTheme = () => useContext(themeContext); 
