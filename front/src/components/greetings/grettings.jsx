import { Component } from "react"
import { Howdy, Hello, Name, Congrats } from "./greetingsUI"

export default class Greetings extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    this.fetch()
  }

  fetch() {
    this.props.api.getUser()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      this.setState({
        data: data.userInfos.firstName
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return(
      <Howdy>
        { this.state.data &&
          <>
            <Hello>Bonjour <Name>{this.state.data}</Name></Hello>
            <Congrats>Félicitation ! Vous avez explosé vos objectifs hier 👏</Congrats>
          </>
        }
      </Howdy>
    )
  }
}
