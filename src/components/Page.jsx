import HowTo from "./HowTo.jsx"
import RecipeList from "./RecipeList.jsx"
import "./Page.css"

export default function Page( {foodName} ) {
  return (
    <main className="mainContent pure-g">
      <h1 id="contentTitle">{foodName}</h1>
      <HowTo />
      <RecipeList />
    </main>
  );
}
