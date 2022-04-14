import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../containers/dashboard/getUserApi"
import { Container, Heading, Name, Subheading } from "./greetingsUI"

/**
 * Displays a greetings message on the user's dashboard
 * @param { GetUserApi } api - Mandatory
 * @returns { StyledComponent }
 */
export default function Greetings(props) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const api = props.api

  /**
   * Fetches the user's name and updates the component's state
   */
  useEffect(() => {
    api.getUser()
    .then(response => {
      if(response.statusText !== "OK") {
        throw new Error(response.statusText)
      }
      return response.data.data
    })
    .then(data => {
      setLoading(false)
      setData(data.userInfos.firstName)
    })
    .catch(error => {
      console.log(error)
      setLoading(false)
      setError(true)
    })
  }, [api])

  return(
    <Container>
      { loading &&
        <>
          <Heading>Chargement</Heading>
          <Subheading>Veuillez patienter</Subheading>
        </>
      }
      { data &&
        <>
          <Heading>Bonjour <Name>{data}</Name></Heading>
          <Subheading>Félicitation ! Vous avez explosé vos objectifs hier 👏</Subheading>
        </>
      }
      { error &&
        <>
          <Heading>Erreur</Heading>
          <Subheading>Veuillez réessayer</Subheading>
        </>
      }
    </Container>
  )
}

Greetings.propTypes = {
  api: PropTypes.instanceOf(GetUserApi).isRequired,
}
