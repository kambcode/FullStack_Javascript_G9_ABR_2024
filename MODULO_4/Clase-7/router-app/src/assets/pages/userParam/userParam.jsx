import React from 'react'
import { useParams } from 'react-router-dom'

const UserParam = () => {

    const param = useParams();

    console.log(param,'params');
  return (
    <div>{param.id}</div>
  )
}

export default UserParam