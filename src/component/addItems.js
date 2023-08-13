import React, {useRef} from 'react'

const AddItems = ({ handleSubmit, addItems, setAddItems}) => {
  const inputRef = useRef()
  return (
           
           <form className='addForm' onSubmit={handleSubmit}>
        <h3>ToDo List Add Items</h3>
            <input ref={inputRef} required placeholder='Add Items' type='text' value={addItems} autoFocus 
             onChange={(e)=> setAddItems(e.target.value)}></input>
            <button onClick={() => inputRef.current.focus()} className='search' type='submit' >submit</button></form>
  )
}

export default AddItems