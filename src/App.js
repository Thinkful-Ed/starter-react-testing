import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import WelcomeBack from "./WelcomeBack";
import Greeting from "./Greeting";
import CountButton, { IncrementButtons } from "./IncrementButtons";
import Footer from "./Footer";
import Subscribe from "./Subscribe.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  return (
    <>
      <Subscribe />
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} text="CONTENT" />
      <WelcomeBack name="Joe" />
      <WelcomeBack name="Anna" />
      <WelcomeBack />
      <IncrementButtons />
      <Greeting name={"Avantha"} greeting={"good morning"} />
      <Greeting name={"Samara"} greeting={"good afternoon"} />
      <Greeting name={"Houston"} greeting={"good evening"} />
      <CountButton />
      <Footer />
    </>
  );
}

export default App;
