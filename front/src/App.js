import logo from './logo.svg'
import './App.css'
import Axios from "axios"

async function getUser() {
  try {
    const response = Axios.get("http://localhost:3000/user/18")
    console.log(response)
  } catch(error) {
    console.error(error)
  }
}

export default function App() {
  getUser()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
