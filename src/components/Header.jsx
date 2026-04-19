import "./Header.css";

export default function Header() {
  return (
    <header className="headerBar">
      <h1>Kevrion's Italian Food</h1>
      <nav className="navBar">
        <a href="#Risotto">Risotto </a> |
        <a href="#Mushroom Veal"> Mushroom Veal </a> |
        <a href="#Pizza"> Pizza </a>
      </nav>
    </header>
  );
}
