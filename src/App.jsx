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
        ingredient1="Arborio Rice"
        ingredient2="Broth"
        ingredient3="Butter"
        ingredient4="Parmesean"
      />
      <Page
        foodName="Mushroom Veal"
        ingredient1="Fresh Veal"
        ingredient2="Mushroom"
        ingredient3="Butter"
        ingredient4="Flour"
      />
      <Page
        foodName="Pizza"
        ingredient1="Pizza Dough"
        ingredient2="Tomato sauce"
        ingredient3="Mozzarella"
        ingredient4="Pepperoni"
      />
      <Footer />
    </main>
  );
}

export default App;
