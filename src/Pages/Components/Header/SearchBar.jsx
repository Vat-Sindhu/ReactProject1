import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder='search'/>
      <img className="img" src="searchimg.jpg"></img> 
    </div>
  )
}

export default SearchBar