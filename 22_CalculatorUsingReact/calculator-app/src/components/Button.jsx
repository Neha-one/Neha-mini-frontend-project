import styles from '../cssModule/Button.module.css';
const Button = ({ buttonValue, onclick }) => {

  let buttonClass = styles.button;

  if (buttonValue === 'C') {
    buttonClass = `${styles.button} ${styles.clearBtn}`;
  }
  else if (['+', '-', '*', '/'].includes(buttonValue)) {
    buttonClass = `${styles.button} ${styles.operatorBtn}`;
  }
  else if (buttonValue === '=') {
    buttonClass = `${styles.button} ${styles.eqlBtn}`;
  }
  return (
    <button className={buttonClass} onClick={onclick}>{buttonValue}</button>

  )
}
export default Button;  