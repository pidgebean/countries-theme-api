import React from 'react'

export default function Countries({data}) {
  return (
    <div className='countries'>
        {/* <div className='country'>
          <img src="https://flagcdn.com/w320/ax.png" alt="" />
          <div>Country Title</div>
          <div>Population</div>
          <div>Region</div>
          <div>Capital</div>
        </div> */}
        {data.map((item, idx) => {
          return(
            <div className='country'>
              <img src={item.flags.png} alt="" />
              <div>{item.name}</div>
              <div>{item.population}</div>
              <div>{item.region}</div>
              <div>{item.capital}</div>
            </div>
          )
        })}
      </div>
  )
}
