import React from 'react'
import Filter from './Filter'
import Countries from './Countries'

export default function Home({handleInputChange, handleInput, result}) {
  return (
    <div>
      <Filter handleInputChange={handleInputChange} handleInput={handleInput}/>
      <Countries result={result}/>
    </div>
  )
}
