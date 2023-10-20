import { useState } from 'react'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0);

  const decremento = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar
        </button> 
        <button onClick={decremento}>
          Restar
        </button> 
      </div>
      <h2>{props.title}</h2>
    </>
  )
}

export default App

