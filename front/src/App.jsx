import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Dashboard from "./components/dashboard"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
`

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <Dashboard />
      </Main>
    </>
  )
}
