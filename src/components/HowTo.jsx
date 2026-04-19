import "./PageContent.css"
export default function HowTo({ list }) {
  return (
    <div className="pure-u-1-2 arrayGuys">
      <ol>
        <li></li>
        {list}
      </ol>
    </div>
  );
}
