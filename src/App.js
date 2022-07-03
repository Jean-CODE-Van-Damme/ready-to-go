import { useState } from "react";
import Header from "./components/Header";
import Switch from "./components/Switch";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div>
      <Header title="Ready To Go" />
      <Switch
        switch1={switch1}
        setSwitch1={setSwitch1}
        switch2={switch2}
        setSwitch2={setSwitch2}
        switch3={switch3}
        setSwitch3={setSwitch3}
      />
    </div>
  );
}

export default App;
