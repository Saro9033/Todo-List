import React from 'react'

const addItems = ({ handleSubmit, addItems, setAddItems}) => {
  return (
           
           <form className='addForm' onSubmit={handleSubmit}>
        <h3>To-Do List Add Items</h3>
            <input required placeholder='Add Items' type='text' value={addItems} autoFocus 
             onChange={(e)=> setAddItems(e.target.value)}></input>
            <button className='search' type='submit' >submit</button></form>
  )
}

export default addItems