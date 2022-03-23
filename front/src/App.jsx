import { Fragment, useState, useEffect } from "react"
import Axios from "axios"

export default function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    Axios.get("http://localhost:3000/user/12")
    .then(response => {
      setData(response.data.data)
      setError(null)
    })
    .catch(error => {
      setError(error.message)
      setData(null)
    })
    .finally(setLoading(false))
  }, [])

  return (
    <Fragment>
      {loading && <p>Veuillez patienter...</p>}
      {error && console.log(error)}
      {data && console.log(data) }
    </Fragment>
  )
}
