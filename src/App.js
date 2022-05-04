import React, { useState } from "react";
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Greeting from "./Greeting";
import CountButton from "./CountButton";
import Footer from "./Footer";
import Subscribe from "./Subscribe.js";

function App() {

  return (
    <>
      <Subscribe />
      <Header />
      <WelcomeBack name="Joe" />
      <WelcomeBack name="Anna" />
      <WelcomeBack />
      <Greeting name={"Avantha"} greeting={"good morning"} />
      <Greeting name={"Samara"} greeting={"good afternoon"} />
      <Greeting name={"Houston"} greeting={"good evening"} />
      <CountButton />
      <Footer />
    </>
  );
}

export default App;
