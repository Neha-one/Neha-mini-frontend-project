function Currdata() {
  let date = new Date();
  let currdate = date.toLocaleDateString("en-IN");
  let currtime = date.toLocaleTimeString("en-IN");

  return (
    <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
      <h3 >
        This is the current time:{currdate} - {currtime}
      </h3>
    </div>
  );
}
export default Currdata;
