import React from 'react'
import DEleteAll from './DeleteAll'
import SearchItems from './SearchItems'

const listNav = ({handleDeleteAll, search, setSearch}) => {
  return (
    <div className='listNav'>
     <DEleteAll handleDeleteAll = {handleDeleteAll}/>  
     <SearchItems search={search} setSearch={setSearch}/> </div> 
  )
}

export default listNav