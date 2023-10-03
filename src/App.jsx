import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import MyNav from "./Components/MyNav";
import MyHome from "./Components/MyHome";
import HomeContacts from "./Components/HomeComponents/HomeContacts";
function App() {
  return (
    <div className="App">
      <MyNav />
      <div className="noNav container">
        <MyHome />
        <HomeContacts />
      </div>
    </div>
  );
}

export default App;
