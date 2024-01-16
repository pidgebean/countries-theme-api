import React from 'react'

export default function Filter({handleInputChange,handleChange}) {
  return (
    <div>
      <input type="text" placeholder='Search for a country...'onChange={handleInputChange}/>

      <input type="radio" name="region" id="africa" onChange={handleChange}/>
      <label htmlFor="africa">Africa</label>

      <input type="radio" name="region" id="america" onChange={handleChange}/>
      <label htmlFor="america">America</label>

      <input type="radio" name="region" id="asia" onChange={handleChange}/>
      <label htmlFor="asia">Asia</label>

      <input type="radio" name="region" id="europe" onChange={handleChange}/>
      <label htmlFor="europe">Europe</label>

      <input type="radio" name="region" id="oceania" onChange={handleChange}/>
      <label htmlFor="oceania">Oceania</label>

    </div>
  )
}
