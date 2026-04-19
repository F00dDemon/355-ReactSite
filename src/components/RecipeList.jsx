import "./PageContent.css"
export default function RecipeList({ list }) {
  return (
    <div className="pure-u-1-2 arrayGuys">
      <ul>
        <li>1. </li>
        <li>2. </li>
        <li>3. </li>
        <li>4. </li>
        {list}
      </ul>
    </div>
  );
}
