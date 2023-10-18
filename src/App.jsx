import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import MyNav from "./Components/MyNav";
import MyHome from "./Components/MyHome";

import FrontEndCompetenze from "./Components/FrontEndCompetenze";
import BackEndCompetenze from "./Components/BackEndCompetenze";
import Lavori from "./Components/Lavori";
import Certificazioni from "./Components/Certificazioni";
function App() {
  return (
    <div className="App">
      <MyNav />
      <div className="appTop">
        <div className="noNav container">
          <MyHome />
          <div className="row">
            <div className="col-xl-6">
              <FrontEndCompetenze />
              <BackEndCompetenze />
            </div>

            <div className="col-xl-6">
              <div className="mieiProgetti">Certificazioni:</div>
              <Certificazioni />
            </div>
          </div>
        </div>
      </div>
      <div className="appBot">
        {" "}
        <div className="container">
          {" "}
          <Lavori />
        </div>
      </div>
    </div>
  );
}

export default App;
