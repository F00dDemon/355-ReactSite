import HowTo from "./HowTo.jsx";
import RecipeList from "./RecipeList.jsx";
import "./Page.css";

export default function Page({ foodName, ingredient1, ingredient2, ingredient3, ingredient4 }) {
  return (
    <main className="mainContent pure-g">
      <h2 id={foodName}>{foodName}</h2>
      <HowTo/>
      

      <RecipeList ingredient1 = {ingredient1} ingredient2 = {ingredient2} ingredient3={ingredient3} ingredient4 = {ingredient4} />
      
    </main>
  );
}
