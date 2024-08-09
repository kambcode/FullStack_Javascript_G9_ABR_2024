import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Aside = () => {

    const [params] = useSearchParams();
    const name = params.get('name') ?? '';

  return (
    <div>
        <h1>Componente Aside</h1>
        <h2>Parametro: {name}</h2>
    </div>
    
  )
}

export default Aside