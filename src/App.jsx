import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComp from './components/button-comp/button-comp'

function App() {
  const [color, setColor] = useState("green")
  useEffect(()=>{
    document.body.style.backgroundColor = color;
  },[color])
  
  return (
    <>
      <div className='app-container'>
        <div className='button-container'>
         
          <ButtonComp color = "red" setColor={setColor}/>
          <ButtonComp color = "green" setColor={setColor}/>
          <ButtonComp color = "blue" setColor={setColor}/>
          <ButtonComp color = "yellow" setColor={setColor}/>
          
        </div>
      </div>
    </>
  )
}

export default App
