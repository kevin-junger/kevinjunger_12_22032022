import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Dashboard from "./components/dashboard"

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <Dashboard />
      </main>
    </>
  )
}
