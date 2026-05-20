import "./App.css";
import AppName from "./components/AppName";
import AppQuote from "./components/AppQuote";
import Currdata from "./components/Currdata";
function App() {
  return (
    <center className="container">
      <AppName />
      <AppQuote />
      <Currdata />
    </center>
  );
}
export default App;
