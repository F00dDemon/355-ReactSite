import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <hr></hr>
      <Hero />
      <Page
        foodName="Risotto"
        ingredients="Rice Broth, butter, cheese"
      />
      <Page
        foodName="Mushroom Veal"
        ingredients="yeumlolri,m"
      />
      <Page
        foodName="Pizza"
        ingredients="idk"
      />
      <Footer />
    </main>
  );
}

export default App;
