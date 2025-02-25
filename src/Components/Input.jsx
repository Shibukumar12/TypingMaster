import React from 'react'

function Input({Type,ClassName,...Props}) {
  return (
    <input  type={Type} className={`rounded-xl py-5 px-2 ${ClassName}`} {...Props}/>
  )
}

export default Input