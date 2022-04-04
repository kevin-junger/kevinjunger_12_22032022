import { Outlet } from "react-router-dom"
import HeaderUI from "./components/header"

export default function App() {
  return(
    <>
      <HeaderUI />
      <Outlet />
    </>
  )
}
