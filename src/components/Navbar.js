import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <ThemeContext.Consumer>{(themeContext) => {
        const {isLightTheme, light, dark} = themeContext;
        const theme = isLightTheme ? light : dark;
        return (
            <div 
                style={{
                    background:theme.elements, 
                    color:theme.text,
                    display:"flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems:"center",
                    paddingLeft:"50px",
                    paddingRight:"50px",
                    paddingBottom:"20px",
                    height:"100px"
                }}
            >
                <h2>Where in the World?</h2>
                <ThemeToggle/>
            </div>
        )
    }}
        
    </ThemeContext.Consumer>
  )
}
