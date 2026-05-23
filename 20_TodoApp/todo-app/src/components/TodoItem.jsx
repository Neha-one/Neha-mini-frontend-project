function TodoItem({ itemName, proDate }) {

  return (
    <div className="container ">
      <div className="row alrow">
        <div className="col-6">{itemName}</div>
        <div className="col-4">{proDate}</div>
        <div className="col-2">
          <button type="button" className="btn albtn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
