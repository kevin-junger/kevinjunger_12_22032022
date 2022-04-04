import logo from "../assets/logo.png"
import styled from "styled-components"

const Header = styled.header`
  background-color: black;
  height: 90px;
`

const Navbar = styled.nav`
  padding-top: 0.9rem;
  padding-left: 2rem;
  padding-right: 3rem;
`

const NavMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavMenuElt = styled.li`
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  list-style: none;
`

const Logo = styled.img`
  padding-top: 0.4rem;
  width: 150px;
`

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
