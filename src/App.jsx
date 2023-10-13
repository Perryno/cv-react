import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import MyNav from "./Components/MyNav";
import MyHome from "./Components/MyHome";

import FrontEndCompetenze from "./Components/FrontEndCompetenze";
import BackEndCompetenze from "./Components/BackEndCompetenze";
import Lavori from "./Components/Lavori";
function App() {
  return (
    <div className="App">
      <MyNav />
      <div className="noNav container">
        <MyHome />
        <div className="row">
          <div className="col-xl-6">
            <FrontEndCompetenze />
            <BackEndCompetenze />
          </div>
          <div className="col-xl-6">
            {" "}
            <Lavori />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
