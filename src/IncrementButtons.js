import React, { useState } from "react";

export function IncrementButtons() {
  const [count, setCount] = useState(0);

  const [lastPressed, setLastPressed] = useState(null);
  const handleClick = (label) => {
    //lastPressed starts with null,
    //In the first execution, null will be compared against strings in the if-else block
    //so the count will not be updated
    setLastPressed(label);
    if (label === "One") {
      setCount(count + 1);
    } else if (label === "Two") {
      setCount(function CountNumber(count) {
        return count + 1;
      });
      setCount(function (count) {
        return count + 1;
      });
    }
  }; //can be arrow function too

  return (
    <div>
      <h3>Last Pressed: </h3>
      <h4>Count: {count} </h4>
      <button onClick={() => handleClick("One")}>One</button>
      <button onClick={() => handleClick("Two")}>Two</button>
    </div>
  );
}

function CountButton() {
  const [clicked, setClicked] = useState(0);
  console.log("Count status:", clicked);
  return (
    <section>
      <p>Click Count: {clicked} </p>
      <button onClick={() => setClicked(clicked + 1)}>Click Counter</button>
    </section>
  );
}

export default CountButton;
