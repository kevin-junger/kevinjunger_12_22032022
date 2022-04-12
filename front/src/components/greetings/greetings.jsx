import { Component } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../containers/dashboard/getUserApi"
import { Howdy, Hello, Name, Congrats } from "./greetingsUI"

/**
 * @class Greetings
 * @classdesc Displays a greetings message on the user's dashboard
 * @param { GetUserApi } api - Mandatory
 */
export default class Greetings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      error: false,
    }
  }

  static propTypes = {
    api: PropTypes.instanceOf(GetUserApi).isRequired,
  }

  /**
   * Fetches the user's name and updates the component's state
   */
  componentDidMount() {
    this.props.api.getUser()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      this.setState({
        data: data.userInfos.firstName,
        error: false,
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({
        data: null,
        error: true,
      })
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
        { this.state.error &&
          <>
            <Hello>Erreur</Hello>
            <Congrats>Veuillez réessayer</Congrats>
          </>
        }
      </Howdy>
    )
  }
}
