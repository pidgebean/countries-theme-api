import React, { Component, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import data from '../data/data.json'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

class Countries extends Component {
    static contextType = ThemeContext;
    state = {
        searchTerm:'',
    }


    render() { 
        const {isLightTheme, light, dark, africa, america, asia, europe, oceania, toggleAfrica, toggleAmerica, toggleAsia, toggleEurope, toggleOceania} = this.context;
        const theme = isLightTheme ? light : dark;
        
        let area = '';

        

        return (
            <div 
                className='countries' 
                style={{
                    background:theme.bg, 
                    color:theme.text,
                    marginTop:"-20px",
                    marginLeft:"0px",
                    paddingTop:"50px",
                    paddingLeft:"50px",
                    height:"auto",
                    minHeight:"1400px"
                    }}
            >
                <div style={{display:"flex", flexDirection:"row"}}>
                    <input 
                        type="text" 
                        style={{
                            background:theme.elements,
                            color:theme.text,
                            border:"none",
                            marginBottom:"100px",
                            height:"50px",
                            width:"300px",
                            paddingLeft:"50px",
                        }} 
                        onChange={e=>this.setState({searchTerm:e.target.value})}
                        placeholder='Search for a country'
                    />  
                    <div className='drop-down' style={{display:"flex", flexDirection:"column", marginLeft:"50px"}}>
                        <span style={{cursor:"pointer", marginBottom:"5px"}} onClick={toggleAfrica}>Africa</span>
                        <span style={{cursor:"pointer", marginBottom:"5px"}} onClick={toggleAmerica}>America</span>
                        <span style={{cursor:"pointer", marginBottom:"5px"}} onClick={toggleAsia}>Asia</span>
                        <span style={{cursor:"pointer", marginBottom:"5px"}} onClick={toggleEurope}>Europe</span>
                        <span style={{cursor:"pointer", marginBottom:"5px"}} onClick={toggleOceania}>Oceania</span>
                    </div>
                </div>

                <div 
                    style={{
                        display:"grid",
                        gridTemplateColumns:"320px 320px 320px 320px",
                        rowGap:"100px",
                        columnGap:"50px",

                    }}>
                
                    {data.filter((val) => {
                        if(this.state.searchTerm === '' || area === ''){
                            return val;
                        }
                        else if (val.region.toLowerCase() === area && this.state.searchTerm === ''){
                            return val;
                        }
                        else if (val.region.toLowerCase() === area && val.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
                            return val;
                        }
                    }).map((val,key) => {
                        return (
                            <NavLink to='/country' style={{textDecoration:"none", color:theme.text}}>
                                <div 
                                    onClick={() => this.setState.country = {val}}
                                    style={{
                                        background: theme.elements,
                                        width:"320px",
                                        boxShadow: theme.shadow,
                                        cursor:"pointer"
                                    }}>
                                    <img src={val.flags.png} alt="" /> <br />
                                    <div 
                                        style={{
                                            padding:"20px",
                                        }}>
                                        <span style={{fontWeight:"bold", fontSize:"20px", marginBottom:"20px"}}>{val.name}</span> <br />
                                        <span style={{fontWeight:"bold", marginRight:"10px", marginTop:"10px"}}>Population:</span>{val.population} <br />
                                        <span style={{fontWeight:"bold", marginRight:"10px"}}>Region:</span>{val.region} <br />
                                        <span style={{fontWeight:"bold", marginRight:"10px"}}>Capital:</span>{val.capital} 
                                    </div>
                                    

                                </div>
                            </NavLink>
                            )
                    })}
                </div>
                
            </div>
        );
    }
}
 
export default Countries;