import React from 'react';

const header = (props) => {
//inline styles using object
    const newStyle = {
        backgroundColor:'black',
        color:'white',
        width:'50%',
        textAlign:'center'
    }
  return (
   
    <div style={newStyle}>
    
        <h1>{props.title}</h1> 
       
    </div>
  )
}


export default header;

