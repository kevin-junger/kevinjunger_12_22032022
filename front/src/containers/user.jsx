import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Sidebar from "../components/sidebar/sidebar"

const Main = styled.main`
  display: flex;
`

export default function User() {
  return(
    <Main>
      <Sidebar />
      <Outlet />
    </Main>
  )
}
