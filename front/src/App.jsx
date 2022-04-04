import HeaderUI from "./components/header"
import SidebarUI from "./components/sidebar"
import DashboardUI from "./components/dashboard"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
`

export default function App() {
  return (
    <>
      <HeaderUI />
      <Main>
        <SidebarUI />
        <DashboardUI />
      </Main>
    </>
  )
}
