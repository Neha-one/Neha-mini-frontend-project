import TodoItem from "./TodoItem";
const TodoItems = ({ ListItem }) => {
  return (
    <div className="item-container">
      {ListItem.map((item) => (
        <TodoItem key={item.proName} itemName={item.proName} itemdate={item.proDate}></TodoItem>

      ))}
    </div>
  )
}
export default TodoItems;