import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);


  return (
    <div>
      <h1> hook state</h1>
      <div className='card'>
        <button onClick={() => setCount(count + 1)}>
          contador{count}
        </button>
      </div>

    </div>
  )
}

export default App
