import { useState } from "react";
import "./App.css";
import Description from "./Description/Description";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Description />
    </>
  );
}

export default App;
