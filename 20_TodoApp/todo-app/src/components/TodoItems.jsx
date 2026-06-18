import TodoItem from "./TodoItem";
import cssStyle from "../cssModule/TodoItems.module.css";

const TodoItems = ({ listItem ,onDeleteClick }) => {
  return (

    <div className={cssStyle["item-container"]}>

      {listItem.map((item) => (

        <TodoItem key={Math.random()} itemName={item.proName} itemdate={item.dueDate} onDeleteClick={onDeleteClick}></TodoItem>

      ))}
    </div>
  )
}
export default TodoItems; 