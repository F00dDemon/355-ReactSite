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
      <Page
        foodName="Risotto"
        howTo="HOW TO: Risotto description"
        ingredients="Rice, Broth, butter, cheese"
      />
      <Page
        foodName="Mushroom Veal"
        howTo="HOW TO: Mushroom description"
        ingredients="Flour, yeast, sauce, cheese"
      />
      <Page
        foodName="Pizza"
        howTo="HOW TO: Pizza description"
        ingredients="idk"
      />
      <Footer />
    </div>
  );
}

export default App;
