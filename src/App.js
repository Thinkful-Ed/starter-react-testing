import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Greeting from "./Greeting";
import Footer from "./Footer";

function App() {
  const handleClick = (evt) => {
    console.log("Subscribing!");
    console.log(evt.target);
    //alert("You subscribed!");
  }
  return (
    <>
      <button onClick={handleClick}>Subscribe</button>
      <Header />
      <WelcomeBack name="Joe" />
      <WelcomeBack name="Anna" />
      <WelcomeBack />
      <Greeting name={"Avantha"} greeting={"good morning"} />
      <Greeting name={"Samara"} greeting={"good afternoon"} />
      <Greeting name={"Houston"} greeting={"good evening"} />
      <Footer />
    </>
  );
}

export default App;
