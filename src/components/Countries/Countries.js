import React from 'react'

export default function Countries({data}) {
  return (
    <div className='countries'>
        {/* {data?.map((item, idx) => {
          return(
            <div className='country'>
              <img src={item.flags.png} alt="" />
              <div>{item.name}</div>
              <div>{item.population}</div>
              <div>{item.region}</div>
              <div>{item.capital}</div>
            </div>
          )
        })} */}
      </div>
  )
}
