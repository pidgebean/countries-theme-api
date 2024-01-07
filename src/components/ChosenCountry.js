import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import data from '../data/data.json'

class ChosenCountry extends Component { 
    render() { 
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light: dark;
        const val = this.props.country;
        return (
            <div>
                <img src={data.val.flags.png} alt="" />
                <div>
                    <div>{data.val.name}</div>
                    <div>
                        <span>Native Name:</span>{data.val.nativeName}
                        <span>Population:</span>{data.val.population}
                        <span>Region:</span>{data.val.region}
                        <span>Sub Region</span>{data.val.subregion}
                        <span>Capital:</span>{data.val.capital}
                    </div>
                    <div>
                        <span>Top Level Domain:</span>{data.val.topLevelDomain}
                        <span>Currencies</span>{data.val.currencies.name}
                        <span>Languages:</span>{data.val.languages.name}
                    </div>
                    <div>
                        <span>Border Countries:</span>
                    </div>
                </div>
                

            </div>
        );
    }
}
 
export default ChosenCountry;