import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const itemList = [{
    "proName": "Buy Milk",
    "proDate": "04/06/2024",
  },
  {
    "proName": "Go to College",
    "proDate": "04/06/2024",
  },
  {
    "proName": "Go to Gym",
    "proDate": "04/06/2024",
  }]
  return (
    <center className="todoContainer">
      <AppName />
      <AddTodo />
      <TodoItems ListItem={itemList}></TodoItems>
    </center>
  );
}
export default App;
