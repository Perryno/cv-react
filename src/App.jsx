import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import MyNav from "./Components/MyNav";
import MyHome from "./Components/MyHome";

import Competenze from "./Components/Competenze";
function App() {
  return (
    <div className="App">
      <MyNav />
      <div className="noNav container">
        <MyHome />

        <Competenze />
      </div>
    </div>
  );
}

export default App;
