import styles from '../cssModule/Display.module.css';
const Display = ({ calValue }) => {
  return (
    <input type="text" className={styles.display} value={calValue} readOnly />

  )
}
export default Display; 