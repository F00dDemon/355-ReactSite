import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Page
        foodName="Risotto"
        howTo="HOW TO: Risotto description"
        ingredients="Rice Broth, butter, cheese"
      />
      <Page
        foodName="Mushroom Veal"
        howTo="HOW TO: Mushroom description"
        ingredients="yeumlolri,m"
      />
      <Page
        foodName="Pizza"
        howTo="HOW TO: Pizza description"
        ingredients="idk"
      />
      <Footer />
    </main>
  );
}

export default App;
