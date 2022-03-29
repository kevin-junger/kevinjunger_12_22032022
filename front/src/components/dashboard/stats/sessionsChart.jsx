import { Component } from "react"

export default class SessionsChart extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
    this.props.api.getUserAverageSessions(12)
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      this.setState({ data: data })
      // console.log(this.state)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return(
      <div>
        { this.state.data &&
          <>
            <h2>Durée moyenne des sessions</h2>
            <ul>
              { this.state.data.sessions.map(
                session => 
                  <li>{session.sessionLength}</li>
              ) }
            </ul>
          </>
        }
      </div>
    )
  }
}
