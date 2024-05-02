import { useState } from 'react'

import UserInput from './components/UserInput.jsx'
import Result from './components/Result.jsx' 

function App() {
  const [Input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
    <UserInput UserInput={Input} onChange={handleChange} />
      <Result input={Input}/>
    </>
  )
}

export default App