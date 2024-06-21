import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Play } from "./components/Play";
import { Rules } from "./components/Rules";
import { Results } from "./components/Results";

function App() {
  const [advancedMode, setAdvancedMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [score, setScore] = useState(0);
  function changeMode() {
    setAdvancedMode(!advancedMode);
  }

  return (
    <>
      <Header advanced={advancedMode} score={score} />
      <footer className="footer w-full flex justify-between py-1 px-5 bottom-3 fixed">
        <div
          onClick={changeMode}
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

      {selected >= 0 ? (
        <Results
          advanced={advancedMode}
          selected={selected}
          setselected={(value: number) => setSelected(value)}
          setscore = {setScore}
        />
      ) : (
        <Play
          setselected={(value: number) => setSelected(value)}
          advanced={advancedMode}
        />
      )}
      <Rules
        open={open}
        advanced={advancedMode}
        setopen={() => setOpen(!open)}
      />
    </>
  );
}

export default App;
