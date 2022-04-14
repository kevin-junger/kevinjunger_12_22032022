import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import GetUserApi from "../../../containers/dashboard/getUserApi"
import {
  Container,
  Loader,
  Error,
  Card,
  Info,
  Title,
  Datum,
  Icon,
} from "./nutritionUI"
import CaloriesIcon from "./icons/calories"
import LipidsIcon from "./icons/lipids"
import CarbohydratesIcon from "./icons/carbohydrates"
import ProteinsIcon from "./icons/proteins"

/**
 * Displays the user's daily nutrition information (calories, etc.) via cards on the right
 * @param { GetUserApi } api - Mandatory
 * @returns { Component | null }
 */
export default function Nutrition(props) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const api = props.api

  /**
   * Fetches and stores the user's nutritional information
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
      let keyData = []
      const categories = ['Calories', 'Protéines', 'Glucides', 'Lipides']
      const catIcons = [CaloriesIcon, ProteinsIcon, CarbohydratesIcon, LipidsIcon]

      let i = 0

      for (const [dataKey, dataValue] of Object.entries(data.keyData)) {
        keyData.push({
          category: dataKey,
          title: categories[i],
          value: dataValue,
          icon: catIcons[i]
        })
        i += 1
      }

      setLoading(false)
      setData(keyData)
    })
    .catch(error => {
      console.log(error)
      setLoading(false)
      setError(true)
    })
  }, [api])

  return(
    <>
      { loading && 
        <>
          <Container>
            <Loader />
          </Container>
          <Container>
            <Loader />
          </Container>
          <Container>
            <Loader />
          </Container>
          <Container>
            <Loader />
          </Container>
        </>
      }
      { data && data.map(datum =>
        <Card key={datum.category}>
          <Icon category={datum.category}>
            {datum.icon()}
          </Icon>
          <Info>
            <Datum>{datum.value} {datum.category === 'calorieCount' ? 'kcal' : 'g'}</Datum>
            <Title>{datum.title}</Title>
          </Info>
        </Card>
      )
      }
      { error &&
        <>
          <Container>
            <Error>!</Error>
          </Container>
          <Container>
            <Error>!</Error>
          </Container>
          <Container>
            <Error>!</Error>
          </Container>
          <Container>
            <Error>!</Error>
          </Container>
        </>
      }
    </>
  )
}

Nutrition.propTypes = {
  api: PropTypes.instanceOf(GetUserApi).isRequired,
}
