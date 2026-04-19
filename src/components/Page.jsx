import HowTo from "./HowTo.jsx";
import RecipeList from "./RecipeList.jsx";
import "./Page.css";

export default function Page({ foodName, howTo, ingredients }) {
  return (
    <main className="mainContent pure-g">
      <h1 id={foodName}>{foodName}</h1>
      <HowTo description={howTo} />
      <RecipeList description={ingredients} />
    </main>
  );
}
