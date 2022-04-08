import { Outlet } from "react-router-dom"
import Header from "./components/header/header"

export default function App() {
  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}
