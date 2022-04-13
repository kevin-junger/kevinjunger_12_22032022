import { Component } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../containers/dashboard/getUserApi"
import { Container, Heading, Name, Subheading } from "./greetingsUI"

/**
 * @class Greetings
 * @classdesc Displays a greetings message on the user's dashboard
 * @param { GetUserApi } api - Mandatory
 */
export default class Greetings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
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
        loading: false,
        data: data.userInfos.firstName,
        error: false,
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({
        loading: false,
        data: null,
        error: true,
      })
    })
  }

  render() {
    return(
      <Container>
        { this.state.loading &&
          <>
            <Heading>Chargement</Heading>
            <Subheading>Veuillez patienter</Subheading>
          </>
        }
        { this.state.data &&
          <>
            <Heading>Bonjour <Name>{this.state.data}</Name></Heading>
            <Subheading>Félicitation ! Vous avez explosé vos objectifs hier 👏</Subheading>
          </>
        }
        { this.state.error &&
          <>
            <Heading>Erreur</Heading>
            <Subheading>Veuillez réessayer</Subheading>
          </>
        }
      </Container>
    )
  }
}
