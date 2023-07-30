import React from 'react'

const DeleteAll = ({handleDeleteAll}) => {
  return ( 
  <div  >
    <button className='deleteAll' onClick={handleDeleteAll}>Delete all</button>
    </div>
      )
}

export default DeleteAll