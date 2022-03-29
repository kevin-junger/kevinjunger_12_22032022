import { Component } from "react"

export default class GoalChart extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
    this.props.api.getUser(12)
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      this.setState({ data: data })
      // console.log(this.state.data)
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
            <h2>Score</h2>
            <p>{this.state.data.todayScore}</p>
          </>
        }
      </div>
    )
  }
}
