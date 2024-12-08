import React, { useState } from 'react'
import { Display } from './Display'
import { Button } from './Button'
import '../Counter.css'
import '../Button.css'

export const Counter = () => {
    const min = 0;
    const max = 5;
    const [number, setNumber] = useState(min)



    const onClickIncHandler = () => {
        if(number < max) {
            setNumber(number + 1)
            //number=number + 1
        }
    }

    const onClickResetHandler = () => {
        setNumber(min)
    }

  return (
    <div className='container'>
        <Display
            number={number}
            className={number===max ? 'numberMax numberScreen' : 'numberScreen'}
        />
        <div className='buttonContainer'>
            <Button
                onclick={onClickIncHandler}
                title='inc'
                className='button'
                disabled={number===max}
            />
            <Button
                onclick={onClickResetHandler}
                title='reset'
                className='button'
                disabled={number===min}
            />
        </div>
    </div>
  )
}

