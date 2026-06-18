import styleCSS from "../cssModule/Emptytodo.module.css";

function Empytodo({ listItem }) {
  return (
    <div className={styleCSS.Empytodo}>
      {/* {listItem.length === 0 && <h2> Enjoy your day -- ❤️-- There is no work !</h2>} */}
      <h2> Enjoy your day -- ❤️-- There is no work !</h2>
    </div>
  );
}
export default Empytodo;