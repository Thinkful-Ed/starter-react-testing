import React, { useState } from "react";
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Greeting from "./Greeting";
import CountButton from "./CountButton";
import Footer from "./Footer";

function App() {
  // const a =  useState(false);
  // const [subscribed, setSubscribed] = a;

  const [subscribed, setSubscribed] = useState(false);
  /* 
  useState function take the initial value, false, returns an array
  whose first value is the variable subscribed, and the second value is a function, setSubscribed
  */

  //how to see state change without installing

  // useEffect(() => {
  //   console.log(subscribed, "- Has changed");
  // }, [subscribed]);

  // const handleClick = (evt) => {
  //   console.log("Subscribing!");
  //   console.log(evt.target);
  //   //alert("You subscribed!");
  // };
  console.log("Subscribed status:", subscribed);
  return (
    <>
      <button onClick={() => setSubscribed(!subscribed)}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <Header />
      <WelcomeBack name="Joe" />
      <WelcomeBack name="Anna" />
      <WelcomeBack />
      <Greeting name={"Avantha"} greeting={"good morning"} />
      <Greeting name={"Samara"} greeting={"good afternoon"} />
      <Greeting name={"Houston"} greeting={"good evening"} />
      <CountButton />;
      <Footer />
    </>
  );
}

export default App;
