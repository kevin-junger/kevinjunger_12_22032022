import { Component } from "react"
import styled from "styled-components"

const Howdy = styled.div`
  margin: 2rem;
`

const Hello = styled.h1`
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 1rem;
`

const Name = styled.em`
  color: red;
  font-style: normal;
`

const Congrats = styled.p`
  font-size: 18px;
`

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
      <>
        { this.state.data &&
          <Howdy>
            <Hello>Bonjour <Name>{this.state.data}</Name></Hello>
            <Congrats>Félicitation ! Vous avez explosé vos objectifs hier 👏</Congrats>
          </Howdy>
        }
      </>
    )
  }
}