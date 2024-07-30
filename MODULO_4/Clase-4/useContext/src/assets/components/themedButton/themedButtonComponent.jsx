import React from 'react'
import { ThemeContext } from './App';

export const ThemedButton = () => {

    const theme = useContext(ThemeContext)
  return (
    <button style={{background: theme.background, color: theme.foreground}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam veritatis nobis vero quas corporis molestiae, ea nostrum facere iusto est suscipit dolorum sequi ad repudiandae quae adipisci at. Totam?
    </button>
  )
}
