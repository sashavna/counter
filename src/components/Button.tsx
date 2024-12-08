import React from 'react'

type ButtonPropsType = {
    title: string
    onclick: ()=>void
    disabled: boolean
    className: string
}

export const Button = ({title,onclick, disabled, className}:ButtonPropsType) => {
  return (
    <button onClick={onclick} disabled={disabled} className={className}>{title}</button>
  )
}

