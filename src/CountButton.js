import React, { useState } from "react";

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
