import React, { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

import themes from '../theme'

export default function ThemeProvider({ children }){
    const [ theme, setTheme ] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if(!context) throw new Error('useTheme must be used within a ThemeProvider')
    const { theme, setTheme } = context;
    console.log(theme)
    return { theme, setTheme }
}