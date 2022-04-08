import logo from "./logo.png"
import { Header, Navbar, NavMenu, NavMenuElt, Logo } from "./headerUIStyledComponents"

export const UI = () => {
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