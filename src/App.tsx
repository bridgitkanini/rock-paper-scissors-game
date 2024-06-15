import { useState } from "react";
import "./App.css";

function App() {
  const [advancedMode, setAdvancedMode] = useState(false);
  function changeModes() {
    setAdvancedMode(!advancedMode);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <footer className="footer w-full flex justify-between py-1 px-5 bottom-3 fixed">
        <div onClick={changeModes} className="modes py-2 px-6 border border-white rounded-lg text-white uppercase">
          {advancedMode ? "Advanced" : "Normal"} Mode
        </div>
        <div className="rules py-2 px-6 border border-white rounded-lg text-white uppercase">Rules</div>
      </footer>
    </>
  );
}

export default App;
