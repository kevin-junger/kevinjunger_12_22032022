import HeaderUI from "./components/header/headerUI"
import SidebarUI from "./components/sidebar/sidebarUI"
import DashboardUI from "./components/dashboard/dashboardUI"
import Api from "./Api"

export default function App() {
  const api = new Api()

  return (
    <>
      <HeaderUI />
      <main className="main">
        <SidebarUI />
        <DashboardUI api={api} />
      </main>
    </>
  )
}
