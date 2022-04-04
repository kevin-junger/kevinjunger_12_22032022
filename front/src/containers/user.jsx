import { Outlet } from "react-router-dom"
import SidebarUI from "../components/sidebar"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
`

export default function User() {
  return(
    <Main>
      <SidebarUI />
      <Outlet />
    </Main>
  )
}