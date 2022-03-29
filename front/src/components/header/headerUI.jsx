import "./header.css"
import logo from "./logo.png"

export default function HeaderUI() {
  return(
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__menu">
          <li>
            <img className="navbar__logo" src={logo} alt="logo" />
          </li>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}
