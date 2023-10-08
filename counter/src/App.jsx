import { useState } from 'react'
import './App.css'



function App() {

  let [counter, setCounter] = useState(15)

  // let counter=25;

  const addValue = () => {
    if (counter < 20) {
      // counter=counter+1;
      setCounter(counter + 1);
      console.log("Clicked", counter);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      // counter=counter+1;
      setCounter(counter - 1);
      console.log("Clicked", counter);
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
        onClick={addValue}
      >Add Value:{counter}</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Remove Value:{counter}</button>
    </>
  )
}

export default App
