import React from 'react'

const SearchItems = ({search, setSearch, }) => {
  return (
    <form className='searchForm' onSubmit={e => e.preventDefault}>
        <input placeholder='Search Items' type='text' value={search} onChange={(e)=> setSearch(e.target.value)}></input>
    </form>
      )
}

export default SearchItems