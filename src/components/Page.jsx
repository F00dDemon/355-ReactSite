import HowTo from "./HowTo.jsx"
import RecipeList from "./RecipeList.jsx"
import "./Page.css"

export default function Page( {foodName} ) {
  return (
    <main className="mainContent">
      <h1 id="contentTitle" className="pure-u-1">{foodName}</h1>
      <div class="pure-g">
        <HowTo />
        <RecipeList />
      </div>
    </main>
  );
}
