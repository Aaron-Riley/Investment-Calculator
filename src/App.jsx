import { useState } from "react";

import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

const errorMessages = [
  "Please enter a duration that is greater than zero.",
  "What are you trying to do???",
  "Really? You are trying to break this?"];
function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [Input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const errorMessage = errorMessages[genRandomInt(genRandomInt(4))];

  const inputIsVaild = Input.duration >= 1;

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
      {!inputIsVaild && <p className="center">{errorMessage}</p>}
      {inputIsVaild && <Result input={Input} />}
    </>
  );
}

export default App;
