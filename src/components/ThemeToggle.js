import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const {toggleTheme, isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <button 
                onClick={toggleTheme} 
                style={{
                    width:"100px", 
                    height:"50px",
                    color: theme.text,
                    background: theme.elements,
                    border: "none",
                    cursor:"pointer"
                }}>Dark Mode</button>
        );
    }
}
 
export default ThemeToggle;