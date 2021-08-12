import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <WelcomeBack name="Joe" />
      <WelcomeBack name="Anna" />
      <WelcomeBack />
      <Footer />
    </>
  );
}

export default App;
