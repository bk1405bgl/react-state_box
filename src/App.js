import { useState } from "react";
import "./styles.css";

export default function App() {
  let [isActive, setIsActive] = useState(false);
  // let isActive = false;

  function handleClick() {
    console.log(isActive);
    setIsActive(!isActive);
    isActive = !isActive;
    // Check that the value changes correctly.
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Activate" : "DeActivate"}
      </button>
    </main>
  );
}
