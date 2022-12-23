import React from 'react'
import './Header.css'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div>
        <h1> This is Header Component</h1>
        <div>
          <><SearchBar/></>
        </div>
    </div>
  )
}


export default Header