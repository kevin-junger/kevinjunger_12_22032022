import { Fragment } from "react"
import Header from "./components/header/header"
import Sidebar from "./components/sidebar/sidebar"
import Dashboard from "./components/dashboard/dashboard"
import Api from "./Api"

export default function App() {
  const api = new Api()

  return (
    <Fragment>
      <Header />
      <main className="main">
        <Sidebar />
        <Dashboard api={api} />
      </main>
    </Fragment>
  )
}
