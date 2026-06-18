import { useState } from "react";
import styleCSS from "../cssModule/AddTodo.module.css";
import { VscAdd } from "react-icons/vsc";

function AddTodo({ handleNewItem }) {

  const [itemName, setItemName] = useState("");
  const [itemDate, setItemDate] = useState("");

  const handleNameChange = (event) => {
    // if (event.target.value === "");
    setItemName(event.target.value);
  }
  const handleDateChange = (event) => {
    // if (event.target.value === "");
    setItemDate(event.target.value);
  }
  const handleAddBtn = () => {
    handleNewItem(itemName, itemDate);
    setItemName("");
    setItemDate("");
  };

  return (

    <div className="container ">

      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={itemName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={itemDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn albtn btn-success "onClick={handleAddBtn}>
            <VscAdd className={styleCSS.btnstyle}/>
          </button>
        </div>
      </div>

    </div>

  );
}
export default AddTodo;
