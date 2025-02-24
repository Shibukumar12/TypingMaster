import React from 'react'

function Button({type,children,className,...props}) {
  return (
    <button type={type} className={`bg-[#9b50ba] ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button