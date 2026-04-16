import "./PageContent.css";
import Page from "./Page";

export default function HowTo({ description }) {
  return (
    <ol className="pure-u-1-2 arrayGuys">
      <p id="howToDesc">{description} </p>
    </ol>
  );
}
