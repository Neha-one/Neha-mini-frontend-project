import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Empytodo from "./components/Empytodo";
import styles from "./cssModule/App.module.css";

import { useState } from "react";

function App() {
  // for Empytodo test ---------
  // const todoList = [];

  const todoList = [
    {
      "proName": "Buy Milk",
      "dueDate": "04/06/2024",
    },
    {
      "proName": "Go to College",
      "dueDate": "04/06/2024",
    },
    {
      "proName": "Go to Gym",
      "dueDate": "07/06/2024",
    },
  ];
  const [itemVal, setItemVal] = useState(todoList);

  const onNewItem = (itemName, itemDate) => {
    // console.log(`val : ${proName} Date : ${dueDate}`);
    const newTodoItem = [...todoList, {
      "proName": itemName,
      "dueDate": itemDate,
    }];
    if (newTodoItem.length >= 0) {
      setItemVal(newTodoItem);
    }
  }
  const handleDeleteBtn = (itemNameForCom) => {
    const newTodoItems = itemVal.filter((item) => item.proName !== itemNameForCom);
    setItemVal(newTodoItems);
  }
  return (
    <center className={styles.todoContainer}>
      <AppName />
      <AddTodo
        handleNewItem={onNewItem}
      />
      {itemVal.length === 0 && <Empytodo />}
      {/* <Empytodo listItem={itemVal} /> */}
      <TodoItems listItem={itemVal} onDeleteClick={handleDeleteBtn} />
    </center>
  );
}
export default App;
