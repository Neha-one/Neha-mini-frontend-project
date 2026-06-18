import styles from "../cssModule/TodoItem.module.css";
import { MdDelete } from "react-icons/md";

function TodoItem({ itemName, itemdate, onDeleteClick }) {

  return (
    <div className={styles.container}>
      <div className={`${styles.alrow} row`}>
        <div className="col-6">{itemName}</div>
        <div className="col-4">{itemdate}</div>
        <div className="col-2">
          <button type="button" className={`${styles.albtn} btn btn-danger`} onClick={() => onDeleteClick(itemName)} >
            <MdDelete className={styles.btnstyle} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
