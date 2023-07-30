import React from 'react'

const footer = ({itemsLen, Checked, unChecked}) => {
  return (
    <div className='Foot'>
     Total = {itemsLen} {itemsLen > 1 ? " Items" : " Item"}! {Checked} Checked && {unChecked} unChecked
    </div>
  )
}

export default footer