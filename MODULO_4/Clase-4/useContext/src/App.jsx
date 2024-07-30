import './App.css'
import  React, {createContext}  from "react";
import { Toolbar } from './assets/components/toolbar/toolbarComponent';

const themes = {
  light:{
    foreground:"#000000",
    background: "#eeeeee"
  },
  dark:{
    foreground:"#ffffff",
    background:"#222222"
  }
}

const ThemeContext = createContext(themes.light)

function App() {

  return (
    <div>
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
