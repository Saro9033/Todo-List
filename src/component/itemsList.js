import React from 'react'



const itemsList = ({items, handleCheck, handleDelete }) => {
  return (
      // props drilling
 
     
     <ul style={{overflow:'scroll', overflowX:'hidden'}}>   
      
    {items.map(n =>
    <li  
        className='list' key={n.id} onDoubleClick={() => handleCheck(n.id)}>
            <input onChange={() => handleCheck(n.id)} type='checkbox' checked={n.check} ></input>
            <p style={(n.check) ? {textDecoration:'line-through'}  : null }>{n.item}</p>
            <button onClick={(e) => handleDelete(n.id)}> Delete</button>
        </li>
    )}
   
</ul> 

  )
}

export default itemsList