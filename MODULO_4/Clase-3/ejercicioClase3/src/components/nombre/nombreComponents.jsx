import React from 'react'

export const Nombre = (props) => {
    console.log(props,'props nombre');
  return (
    <div>
        <h1>
            {props.name}
        </h1>
    </div>
    
  )
}


