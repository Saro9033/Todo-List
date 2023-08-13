import React from 'react'
import ItemsList from './itemsList'

const ArrofObject = ({items,  handleCheck, handleDelete}) => {

    return (    
        <>  
            {(items.length > 0) ? ( 
            // props drilling      
         <ItemsList items={items} handleCheck={handleCheck}  
      handleDelete={handleDelete} >  
         </ItemsList>
       
         ) :  <h2>Your list is Empty</h2> }
       </>
    )
}

export default ArrofObject