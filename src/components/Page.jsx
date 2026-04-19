import HowTo from "./HowTo.jsx";
import RecipeList from "./RecipeList.jsx";
import "./Page.css";

export default function Page({ foodName, ingredients }) {
  return (
    <main className="mainContent pure-g">
      <h2 id={foodName}>{foodName}</h2>
      <HowTo/>
      
      <RecipeList description={ingredients} />
    </main>
  );
}
