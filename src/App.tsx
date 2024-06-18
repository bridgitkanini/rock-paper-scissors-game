import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Rules } from "./components/Rules"
// import { Play } from "./components/Play"

function App() {
  const [advancedMode, setAdvancedMode] = useState(false);
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState(-1);
  function changeModes() {
    setAdvancedMode(!advancedMode);
  }

  return (
    <>
      <Header advanced={advancedMode} score={0} />
      {/* <Play selected={selected} setSelected={(value) => setSelected(value)} advanced={advancedMode} /> */}
      <footer className="footer w-full flex justify-between py-1 px-5 bottom-3 fixed">
        <div
          onClick={changeModes}
          className="modes py-2 px-6 border border-white rounded-lg text-white uppercase"
        >
          {advancedMode ? "Advanced" : "Normal"} Mode
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="rules py-2 px-6 border border-white rounded-lg text-white uppercase"
        >
          Rules
        </div>
      </footer>
      <Rules
        open={open}
        advanced={advancedMode}
        setopen={() => setOpen(!open)}
      />
    </>
  );
}

export default App;
