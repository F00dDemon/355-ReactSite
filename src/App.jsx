import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Page foodName="Risotto"/>
      <Page foodName="Mushroom Veal"/>
      <Page foodName="Pizza"/>
      <Footer />
    </div>
  );
}

export default App;
