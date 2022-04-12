import logo from "./logo.png"
import { Header, Navbar, NavMenu, NavMenuElt, Logo } from "./headerUI"

/**
 * Displays the global header
 * @returns { StyledComponent }
 */
export default function HeaderUI() {
  return(
    <Header>
      <Navbar>
        <NavMenu>
          <NavMenuElt>
            <Logo src={logo} alt="logo" />
          </NavMenuElt>
          <NavMenuElt>Accueil</NavMenuElt>
          <NavMenuElt>Profil</NavMenuElt>
          <NavMenuElt>Réglage</NavMenuElt>
          <NavMenuElt>Communauté</NavMenuElt>
        </NavMenu>
      </Navbar>
    </Header>
  )
}
