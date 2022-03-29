import { Component } from "react"

export default class DailyChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      /* loading: true,
      error: null, */
    }
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
    this.props.api.getUserActivity(12)
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      this.setState({
        data: data,
        /* error: null, */
      })
      // console.log(this.state)
    })
    .catch(error => {
      console.log(error)
    })
    // .finally(this.setState({ loading: false }))
  }

  render() {
      return(
      <div>
        { this.state.data &&
          <>
            <h2>Activité quotidienne</h2>
            <ul>
              { this.state.data.sessions.map(
                session =>
                  <li>
                    Jour : {session.day}<br />
                    Poids : {session.kilogram}<br />
                    Calories : {session.calories}
                  </li>
              ) }
            </ul>
          </>
        }
      </div>
    )
  }
}
