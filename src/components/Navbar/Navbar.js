import React from 'react'
import './Navbar.css'

export default function Navbar({darkMode}) {
  return (
    <div className={darkMode ? 'navbar navbar-dark' : 'navbar navbar-light'}>
      Where in the world?

      <button className={darkMode ? 'nav-btn dark' : 'nav-btn light'}>
        Dark Mode
        <ion-icon size="small" name="moon-outline" className='mode-icon'></ion-icon>
      </button>
    </div>
  )
}
