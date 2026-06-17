import styles from './cssModule/App.module.css';
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';

function App() {

  const [calValue, setCalVal] = useState("");
  const addCalVal = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    }
    else if (buttonText === '=') {
      try{
        const result = eval(calValue);
        setCalVal(result)
      } catch{
        setCalVal("Error");
      }
    }
    else {

      let newDisplay = calValue + buttonText;
      setCalVal(newDisplay);
    }
  }

  return (
    <div className={styles.container}>
      <Display calValue={calValue} />
      <ButtonContainer handleOnClick={addCalVal} />
    </div>
  )
}
export default App;