import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Aside from '../components/Aside'


const Home = () => {
    const [params, setParams] = useSearchParams('')
    function addParams(){
        setParams({
            term: 'valor',
            name: 'gustavo'
        })
    }

    // function addParams2(){
    //     setParams({
        // term: 'valor',
        // name: 'gustavo'
    // })
    // }

    function addParams2(){
        params.set('term3','prueba')
        setParams(params)
    }

    function deleteKey(){
        params.delete('name')
        setParams(params);
    }

  return (
    <div>
        

        <h1>Home</h1>
        <button type='button' onClick={addParams}>
            PRIMERO
        </button>
        <button type='button' onClick={addParams2}>
            SEGUNDO
        </button>
        <button type='button' onClick={deleteKey}>
            DELETED
        </button>

        <Aside />
    </div>
  )
}

export default Home