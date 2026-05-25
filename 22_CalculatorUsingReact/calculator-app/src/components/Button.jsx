import styles from '../cssModule/Button.module.css';
const Button = ({buttonValue}) => {
  return (
    <button className={styles.button}>{buttonValue}</button>

  )
}
export default Button;