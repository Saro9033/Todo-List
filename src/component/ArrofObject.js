import React from 'react'
import ItemsList from './itemsList'
import AddItems from './addItems'


const ArrofObject = ({items,  handleCheck, handleDelete, handleSubmit, addItems, setAddItems, 
    }) => {

    return (
       
        <div className='todo-list'> 
        <AddItems handleSubmit={handleSubmit}  addItems={addItems} setAddItems={setAddItems}/>
        
            {(items.length > 0) ? ( 
            // props drilling      
         <ItemsList items={items} handleCheck={handleCheck}  
      handleDelete={handleDelete}
      >  
         </ItemsList>
       
         ) :  <h2>Your list is Empty</h2> }
       </div>
    )
}

export default ArrofObject