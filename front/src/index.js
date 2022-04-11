import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./css/normalize.css"
import "./css/font.css"
import App from "./App"
import User from "./containers/user"
import Dashboard from "./containers/dashboard/dashboard"

const rootElement = document.getElementById("root")

render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route exact path="user" element={<User />}>
          <Route exact path=":userId" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)
