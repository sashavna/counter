import React from 'react'
import '../Display.css'

type DisplayPropsType = {
    number: number
    className: string
}

export const Display = ({number, className}:DisplayPropsType) => {
  return (
    <div className='display'>
        <div className={className}>{number}</div>
    </div>
  )
}

