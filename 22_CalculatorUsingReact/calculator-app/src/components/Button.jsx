import styles from '../cssModule/Button.module.css';
const Button = ({ buttonValue, onclick }) => {
  return (
    <button className={styles.button} onClick={onclick}>{buttonValue}</button>

  )
}
export default Button;  