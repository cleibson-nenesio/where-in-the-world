import React, { useState } from "react"

export const themes = {
    dark: {
        background: 'hsl(207, 26%, 17%)',
        elements: 'hsl(209, 23%, 22%)',
        textColor: 'hsl(0, 0%, 100%)'
    },

    light: {
        background: 'hsl(0, 0%, 98%)',
        elements: 'hsl(0, 0%, 100%)',
        textColor: 'hsl(200, 15%, 8%)'
    }
}

export const ThemeContext = React.createContext({})

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.dark)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}