import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonText) => {
    //console.log(buttonText);

    //Clear the display value
    if (buttonText === "C") {
      setcalVal("");
    } 
    //Calculate the input on display
    else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <h3 className={styles.h3}>Calculator</h3>

      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
