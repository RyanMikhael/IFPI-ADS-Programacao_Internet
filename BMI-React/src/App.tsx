import { useState } from 'react'
import './App.css'
import Label from './components/Label'
import Input from './components/Input'
import Button from './components/Button'
import Title from './components/Title'
import Result from './components/Result'

function App(){
  const [weight, setWeight] = useState(Number)
  const [height, setHeight] = useState(Number)
  const [result, setResult] = useState(Number)

  const captureChangeWeight = (e: any) =>{
    setWeight(e.target.value)
  }

  const captureChangeHeight = (e: any) =>{
    setHeight(e.target.value)
  }

  const calculateBMI = () =>{
    const bmi = weight / (height * height)
    const formatedBmi = Number(bmi.toFixed(1))
    setResult(formatedBmi)
    
  }

  const resetFields = () => {
    setWeight(0)
    setHeight(0)
    setResult(0)
  }

  return(
    <div className='container'>
      <header>
        <Title  nameApp={'BMI APP'} />
      </header>
      
      <main>
        
          <Label fieldName={'Weight'}/>
          <Input value={weight} changeCallback={captureChangeWeight} />

          <Label fieldName={'Height'} />
          <Input value={height} changeCallback={captureChangeHeight} />

          

          <Button clickedFunction={calculateBMI} label={'Calculate'}/>

          <Button clickedFunction={resetFields} label={'Reset'} />

        
          {result > 0  &&(
            <Result finalResult={result}/>
          )}        
      </main>

    </div>
  )
}

export default App