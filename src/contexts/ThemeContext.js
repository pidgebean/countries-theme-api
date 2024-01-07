import React, {createContext, Component} from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: false,
        light: {elements: 'hsl(0, 0%, 100%)', text: 'hsl(200, 15%, 8%)', bg: 'hsl(0, 0%, 98%)', shadow:"10px 10px 10px black"},
        dark: {elements: 'hsl(209, 23%, 22%)', text: 'hsl(0, 0%, 100%)', bg: 'hsl(207, 26%, 17%)', shadow:"black"},
        africa: false,
        america: false,
        asia: false,
        europe:false,
        oceania:false
    } 

    toggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme});
    }

    toggleAfrica = () => {
        this.setState({africa: !this.state.africa});
        console.log('africa pressed')
    }

    toggleAmerica = () => {
        this.setState({america: !this.state.america});
        console.log('america pressed')
    }

    toggleAsia = () => {
        this.setState({asia: !this.state.asia});
        console.log('asia pressed')
    }

    toggleEurope = () => {
        this.setState({europe: !this.state.europe});
        console.log('europe pressed')
    }

    toggleOceania = () => {
        this.setState({oceania: !this.state.oceania});
        console.log('oceania pressed')
    }

    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme:this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;

