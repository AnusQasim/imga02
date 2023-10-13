import { useState } from "react";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  function clickImg() {
    const temList = [...list];
    temList.push(
      "https://cdn.motor1.com/images/mgl/Pz2RK/s1/audi-rs-e-tron-gt.jpg"
    );
    setList(temList);
  }

  function deleteAll() {
    let temList = [...list];
    temList = [];
    setList(temList);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* {<img src={logo} className="APp-logo" alt="logo"/>} */}
        <button onClick={clickImg}>clickImg</button>
        <br />
        <button onClick={deleteAll}>deleteALl</button>
        {list.map(function (item) {
          return <img src={item} alt="" />;
        })}
      </header>
    </div>
  );
};

export default App;
