import Catelog from "./components/catelog/catelog";
import NavBar from "./components/navBar/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar imgReq={true} />
      <Catelog />
    </div>
  );
}

export default App;
